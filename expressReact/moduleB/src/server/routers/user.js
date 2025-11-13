import express from 'express';
import prisma from '../../lib/prisma.js';
const router = express.Router();
import { auth } from '../middlewares/auth.js';

router.get('/me', auth, async(req, res) => {
    res.json({ ok: true, user: req.user });
});

router.get('/', async (req, res) => {
    const users = await prisma.user.findMany({ select: { id: true, email: true, name: true } });
    res.json({ ok: true, users });
});

export default router;