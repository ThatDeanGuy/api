const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple endpoint
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});