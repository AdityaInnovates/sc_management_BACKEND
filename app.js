const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { testConnection } = require('./src/config/db');
const schoolRoutes = require('./src/routes/schoolRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', schoolRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ error: 'Something went wrong on our end' });
});

// Initialize server
const startServer = async () => {
  // Only test connection if not in test environment
  if (process.env.NODE_ENV !== 'test') {
    await testConnection();
  }
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
