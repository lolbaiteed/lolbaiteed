import multer from 'multer';
import path from 'path';
import os from 'os';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/uploads'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const name = `${Date.now()}-${Math.round(Math.random()*1e6)}${ext}`;
        cb(null, name);
    }
});

export const upload = multer({ storage });