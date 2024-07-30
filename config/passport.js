const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models/user');

passport.use(new LocalStrategy((username, password, done) => {
    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Usuario no encontrado' });

        bcrypt.compare(password, user.password, (err, res) => {
            if (res) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Contraseña incorrecta' });
            }
        });
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, user) => {
        done(err, user);
    });
});

module.exports = passport;
