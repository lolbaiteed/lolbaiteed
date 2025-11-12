const express = require('express');
const router = express.Router();
const { hashPassword, verifyPassword } = require('../../lib/passHash');
const jwt = require('jsonwebtoken');
const prisma = require('../../lib/prisma');

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/register", async(req, res) => {
    try {
        const {email, password, name} = req.body;
        const hashed = hashPassword(password);
        const user = await prisma.user.create({
            data: {email, password: hashed, name},
        });
        res.json({ok: true, user: { id: user.id, email: user.email } });
    } catch (err) {
        console.error(err);
        res.status(400).json({ok: false, error: err.message});
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(401).json({ ok: false, error: 'Invalid email' });

        const passMatch = verifyPassword(password, user.password);
        if (!passMatch) return res.status(401).json({ok: false, message: 'Invalid password'});

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ ok: true, token });
    } catch (err) {
        res.status(500).json({ok: false, error: err.message});
    }
});

module.exports = router;