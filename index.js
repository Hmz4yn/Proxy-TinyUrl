const express = require('express');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
const PORT = 3002;

// Middleware to parse JSON request bodies
app.use(express.json());

// Welcome message for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the URL Shortener API! Use POST /shorten to create a short URL.');
});

// Use URL routes
app.use('/', urlRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
