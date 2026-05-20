require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const express = require('express');

const morgan = require('morgan');

const connectDB = require('./config/database');

const inspectionsRoutes = require('./routes/inspectionsRoutes');

const app = express();

const PORT = process.env.PORT || 3000;



// Conectar MongoDB
connectDB();

app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Legacy Farms Quality API v1');
});

app.use('/inspections', inspectionsRoutes);

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});