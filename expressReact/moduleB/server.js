require("dotenv").config();
const express = require("express");
const next = require("next");
const path = require("path");

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

    const authRoutes = require('./src/server/routers/auth');
    const userRoutes = require('./src/server/routers/user');

    server.use('/api/auth', authRoutes);
    server.use('/api/users', userRoutes);

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