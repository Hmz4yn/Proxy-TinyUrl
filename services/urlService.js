const crypto = require('crypto');
const axios = require('axios');

// In-memory storage for URL mappings
const urlDatabase = new Map();

// Generate a short URL using a hash of the original URL
exports.generateShortUrl = (originalUrl) => {
    // Create a hash from the original URL to use as the short code
    const hash = crypto.createHash('sha256').update(originalUrl).digest('base64url').substring(0, 6);

    // Check if this URL is already shortened
    if (!urlDatabase.has(hash)) {
        urlDatabase.set(hash, originalUrl);
    }

    return `http://localhost:3002/${hash}`;
};

// Retrieve the original URL for a given short code
exports.getOriginalUrl = (shortCode) => {
    return urlDatabase.get(shortCode);
};

// Fetch the content of the original URL
exports.fetchOriginalContent = async (originalUrl) => {
    const response = await axios.get(originalUrl);
    return response.data;
};
