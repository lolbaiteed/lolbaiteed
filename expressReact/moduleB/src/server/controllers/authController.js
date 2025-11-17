import prisma from "../../lib/prisma.js";
import jwt from "jsonwebtoken";
import { hashPassword, verifyPassword } from "../../lib/passHash.js";
const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const existing = await prisma.user.findUnique({
      where: { email },
    });
    if (existing) return res.status(400).json({ error: "User already exists" });

    const hashed = hashPassword(password);

    const user = await prisma.user.create({
      data: { email, password: hashed, name, role: "User" },
    });

    res.json({ message: "Created", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
};


function parseCookies(cookieHeader) {
    return Object.fromEntries(
        cookieHeader.split('; ').map(cookie => {
            const [name, ...rest] = cookie.split('=');
            return [name, decodeURIComponent(rest.join('='))];
        })
    );
}

export const login = async (req, res) => {
  try {
    const cookieHeader = req.headers.cookie;

    if (cookieHeader) {
        const cookie = parseCookies(cookieHeader);
        const token = cookie.token;

        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        res.status(200);
    } else {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) return res.status(404).json({ error: "User not found" });

      const passMatch = verifyPassword(password, user.password);
      if (!passMatch)
        return res.status(401).json({ error: "Invalid password" });

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1d",
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json({ message: "Logged in" });
    }
  } catch (error) {
    res.status(500).json({ error: "login failed" });
  }
};
