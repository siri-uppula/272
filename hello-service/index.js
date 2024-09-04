const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Hello service listening on port 3000');
});
