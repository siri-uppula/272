const express = require('express');
const app = express();

app.get('/world', (req, res) => {
    res.send('World');
});

app.listen(3001, () => {
    console.log('World service listening on port 3001');
});

