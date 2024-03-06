const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to send the API key to the client
app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});