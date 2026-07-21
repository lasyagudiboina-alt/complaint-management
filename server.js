const express = require('express');
const cors    = require('cors');
const path    = require('path');
require('dotenv').config();

const app = express();

/* ── Middleware ── */
app.use(cors());
app.use(express.json({ limit: '20mb' }));       // 20mb for base64 photo uploads
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));  // serves all frontend files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/* ── API Routes ── */
app.use('/api/auth',       require('./routes/auth'));
app.use('/api/complaints', require('./routes/complaints'));
app.use('/api/users',      require('./routes/users'));
app.use('/api/stats',      require('./routes/stats'));
app.use('/api/activity',   require('./routes/activity'));

/* ── Health check ── */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

/* ── Catch-all: serve index.html for any unknown route ── */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homePage.html'));
});

/* ── Global error handler ── */
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

/* ── Start ── */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
