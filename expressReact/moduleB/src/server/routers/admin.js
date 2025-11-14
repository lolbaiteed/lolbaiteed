import express from 'express';
import prisma from '../../lib/prisma.js';
import { hashPassword } from '../../lib/passHash.js';
const router = express.Router();

router.get("/allUsers", async (req, res) => { 
    try {
        const UsersData = await prisma.user.findMany();
        res.status(200).json(UsersData);
    } catch (error) {
        res.status(400).json({ error: "Table not found" });
    }
});

router.post('/addAdmin', async (req, res) => {
    const request = req.data;
    try {
        switch (request.type) {
            case 'add':
                const newUser = prisma.user.create({
                    data: {
                        email: request.data.email,
                        name: request.data.name,
                        password: hashPassword(request.data.password),
                        role: "Admin"
                    }
                });
                return res.status(201).json({ message: "User created", newUser});

            case 'provide':
                const findUser = await prisma.user.findUnique({
                    where: { id: request.data.id },
                });
                if (!findUser) return res.status(404).json({ error: "User not found "});

                const updated = await prisma.user.update({
                    where: {
                        id: findUser.id,
                    },
                    data: {
                        role: "Admin",
                    }
                });
                if(!updated) return res.status(400).json({ error: "Cannot update data" });
                return res.status(200).json({message: "Role updated", updated});
        }
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
})

export default router;