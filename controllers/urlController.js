const urlService = require('../services/urlService');

// Controller to create a short URL
exports.createShortUrl = (req, res) => {
    const originalUrl = req.body.url;
    const shortUrl = urlService.generateShortUrl(originalUrl);
    res.json({ shortUrl });
};

// Controller to handle short URL access and display content from the original URL
exports.handleShortUrl = async (req, res) => {
    const shortCode = req.params.shortCode;
    const originalUrl = urlService.getOriginalUrl(shortCode);

    if (originalUrl) {
        try {
            // Fetch the original site content and return it, keeping the short URL
            const content = await urlService.fetchOriginalContent(originalUrl);
            res.send(content);
        } catch (error) {
            console.error('Error fetching original URL content:', error);
            res.status(500).json({ error: 'Error fetching original URL content' });
        }
    } else {
        res.status(404).json({ error: 'Short URL not found' });
    }
};
