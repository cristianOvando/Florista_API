const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const catalogRoutes = require('./routes/catalogRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

app.use('/api', catalogRoutes);
app.use('/api', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});