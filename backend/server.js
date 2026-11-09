const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { startQueueWorker } = require('./services/sheetsService');

const app = express();

// Connect to MongoDB Database (with automatic in-memory seeding fallback)
connectDB();

// Initialize Middlewares
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Private-Network', 'true');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fs = require('fs');
const staticDir = fs.existsSync(path.join(__dirname, '../dist', 'index.html'))
  ? path.join(__dirname, '../dist')
  : (fs.existsSync(path.join(__dirname, '../frontend/dist', 'index.html'))
      ? path.join(__dirname, '../frontend/dist')
      : path.join(__dirname, 'public'));

// Serve static frontend files
app.use(express.static(staticDir));

// Mount API Routes
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/register', require('./routes/registrationRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/teams', require('./routes/teamRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/google-form', require('./routes/googleFormRoutes'));
app.use('/api/whatsapp', require('./routes/whatsappRoutes'));
app.use('/api/admin/whatsapp', require('./routes/whatsappRoutes'));

// Fallback error handler for multer and system errors
app.use((err, req, res, next) => {
  if (err.name === 'MulterError') {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'Screenshot file size exceeds the 5MB limit!' });
    }
    return res.status(400).json({ message: err.message });
  } else if (err) {
    console.error('Unhandled Server Error:', err);
    return res.status(500).json({ message: err.message || 'An unexpected server error occurred.' });
  }
  next();
});

// Catch-all for unhandled API routes: ALWAYS return JSON, never HTML
app.all('/api/*', (req, res) => {
  res.status(404).json({ message: `API route not found: ${req.method} ${req.originalUrl}` });
});

// Wildcard fallback to serve React index.html for client-side routing ONLY
app.get('*', (req, res) => {
  if (req.path.startsWith('/api') || req.originalUrl.startsWith('/api')) {
    return res.status(404).json({ message: `API route not found: ${req.method} ${req.originalUrl}` });
  }
  res.sendFile(path.join(staticDir, 'index.html'));
});

// Start background sync workers and server listening (standalone mode only)
const PORT = process.env.PORT || 5000;
if (require.main === module || (!process.env.VERCEL && process.env.NODE_ENV !== 'production')) {
  startQueueWorker();
  const { startGoogleSheetPoller } = require('./services/googleSheetPoller');
  startGoogleSheetPoller(60000);
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
  });
}

module.exports = app;

