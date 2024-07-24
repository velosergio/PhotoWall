const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar almacenamiento de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ruta para cargar imágenes
app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Imagen subida con éxito');
});

// Ruta para obtener imágenes
app.get('/images', (req, res) => {
    fs.readdir('uploads/', (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudieron cargar las imágenes' });
        }
        res.json(files);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
