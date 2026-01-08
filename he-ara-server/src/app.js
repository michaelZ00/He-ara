const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const visitRoutes = require('./routers/visitRoutes');
const app = express();

// --- Middleware ---

// Add security headers, enable CORS, and log HTTP requests
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse JSON bodies for incoming requests
app.use(express.json());

app.use('/api', visitRoutes);

// --- Error Handling ---
// Custom error-handling middleware that catches errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;