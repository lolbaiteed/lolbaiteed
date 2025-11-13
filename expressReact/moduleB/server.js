import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import next from 'next';
import path from 'path';
import { fileURLToPath } from 'url';
import authRouters from './src/server/routers/auth.js';
import userRouters from './src/server/routers/user.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();

    server.use(express.json());
    server.use(express.urlencoded({extended: true}));

    server.set('views', path.join(__dirname, 'views'));
    server.set('view engine', 'ejs');

    server.use('/api/auth', authRouters);
    server.use('/api/users', userRouters);

    server.get('/admin', (req, res) => {
        const data = {title: 'Admin area', now: new Date()};
        res.render('admin', data);
    });

    server.all('{/*path}', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`Server listening on localhost:${PORT}`);
    })
})