import prisma from '../../lib/prisma.js'
import jwt from 'jsonwebtoken'
import { hashPassword, verifyPassword } from '../../lib/passHash.js';

export const register = async (req, res) => {
    try {
        const {email, password, name} = req.body;

        const existing = await prisma.user.findUnique({
            where: { email }
        });
        if (existing) return res.status(400).json({ error: "User already exists" });

        const hashed = hashPassword(password);

        const user = await prisma.user.create({
            data: {email, password: hashed, name},
        });

        res.json({ message: "Created", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Registration failed" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) return res.status(404).json({error: "User not found" });

        const passMatch = verifyPassword(password, user.password);
        if (!passMatch) return res.status(401).json({ error: "Invalid password" });

        const token = jwt.sign(
            { userId: user.id },
             JWT_SECRET,
              { expiresIn: '1d' }
            );
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: "Login failed" });
    }
}