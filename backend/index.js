const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Sample API route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong 🏓' });
});

// Root route fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ MyHouse backend running on http://localhost:${PORT}`);
});
