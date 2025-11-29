const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve JSON data files
app.use('/api/data', express.static(path.join(__dirname, 'src/data')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Gender Responsive Mechanism API is running',
    timestamp: new Date().toISOString()
  });
});

// API endpoint to serve campaigns data
app.get('/api/campaigns', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/data/campaigns.json'));
});

// API endpoint to serve resources data
app.get('/api/resources', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/data/resources.json'));
});

// API endpoint to serve statistics data
app.get('/api/statistics', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/data/statistics.json'));
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 Visit http://localhost:${PORT} to view the app`);
  console.log(`📊 API endpoints available at http://localhost:${PORT}/api`);
});

