const jwt = require('jsonwebtoken');
const prisma = require('../../lib/prisma');
const JWT_SECRET = process.env.JWT_SECRET;

async function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ ok: false, error: "Missing token" });
    }
    
    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        const user = await prisma.user.findUnique({ where: { id: payload.userId } });
        if (!user) return res.status(401).json({ ok: false, error: "User not found" });
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ ok: false, error: "Invalid token" });
    }
}

module.exports = auth;