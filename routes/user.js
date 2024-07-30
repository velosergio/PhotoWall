const express = require('express');
const db = require('../models/user');
const router = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

router.get('/users', ensureAuthenticated, (req, res) => {
    db.all('SELECT id, username FROM users', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudieron cargar los usuarios' });
        }
        res.json(rows);
    });
});

module.exports = router;
