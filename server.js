const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('./config/passport');
const authRoutes = require('./routes/auth');
const imageRoutes = require('./routes/image');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const forgotPasswordRoutes = require('./routes/forgotPassword');
const resetPasswordRoutes = require('./routes/resetPassword');
const registerRoutes = require('./routes/register');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);
app.use('/', imageRoutes);
app.use('/', userRoutes);
app.use('/admin', adminRoutes);
app.use('/', forgotPasswordRoutes);
app.use('/', resetPasswordRoutes);
app.use('/', registerRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
