const express = require('express');
const router = express.Router();
const path = require('path');
const ensureAuthenticated = require('../middlewares/auth');

router.get('/', ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin.html'));
});

module.exports = router;
