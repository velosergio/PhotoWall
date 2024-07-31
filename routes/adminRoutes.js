const express = require('express');
const router = express.Router();
const path = require('path');
const ensureAuthenticated = require('../middlewares/auth');
const db = require('../models/user');

// Ruta del dashboard
router.get('/admin', ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin.html'));
});

// Ruta para el dashboard/usuarios
router.get('/admin/users', ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin-users.html'));
});

module.exports = router;
