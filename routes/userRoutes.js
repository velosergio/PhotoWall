const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../middlewares/auth');
const db = require('../models/user');

// Ruta para obtener todos los usuarios
router.get('/api/users', (req, res) => {
    db.all('SELECT id, username, email FROM users', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudieron cargar los usuarios' });
        }
        res.json(rows);
    });
});

// Ruta para obtener la lista de usuarios
router.get('/api/users', ensureAuthenticated, (req, res) => {
    db.all('SELECT id, username, email FROM users', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudieron cargar los usuarios' });
        }
        res.json(rows);
    });
});
module.exports = router;
