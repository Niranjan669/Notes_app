// server.js
const express = require('express');
const connectDB = require('./db');
const noteRoutes = require('./routes/noteRoutes');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/notes', noteRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
