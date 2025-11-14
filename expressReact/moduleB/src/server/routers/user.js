import express from 'express';
import prisma from '../../lib/prisma.js';
const router = express.Router();
import { auth } from '../middlewares/auth.js';

router.get('/me', auth, async(req, res) => {
    res.status(200).json({ user: req.user });
});

router.get('/', async (req, res) => {
    const users = await prisma.user.findMany({ select: { id: true, email: true, name: true } });
    res.status(200).json({ users });
});

export default router;