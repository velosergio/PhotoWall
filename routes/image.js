const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

router.post('/upload', ensureAuthenticated, upload.single('image'), (req, res) => {
    const filePath = path.join(__dirname, '../uploads', req.file.filename);
    sharp(filePath)
        .resize(500)
        .toFile(filePath + '-small', (err, info) => {
            if (err) {
                return res.status(500).json({ error: 'Error al procesar la imagen' });
            }
            res.send('Imagen subida con éxito');
        });
});

router.get('/images', (req, res) => {
    fs.readdir('uploads/', (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudieron cargar las imágenes' });
        }
        res.json(files.filter(file => !file.endsWith('-small')));
    });
});

module.exports = router;
