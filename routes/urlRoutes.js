const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

// Route to create a short URL
router.post('/shorten', urlController.createShortUrl);

// Route to access the original URL content via short URL
router.get('/:shortCode', urlController.handleShortUrl);

module.exports = router;
