const express = require('express');
const router = express.Router();
const prisma = require('../../lib/prisma');
const auth = require('../middlewares/auth');

router.get('/me', auth, async(req, res) => {
    res.json({ ok: true, user: req.user });
});

router.get('/', async (req, res) => {
    const users = await prisma.user.findMany({ select: { id: true, email: true, name: true } });
    res.json({ ok: true, users });
});

module.exports = router;