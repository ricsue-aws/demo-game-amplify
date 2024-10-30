const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');

const corsOptions = {
    origin: 'http://127.0.0.1:3000', // or whatever origin you want to allow
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use('(?!/cors)', cors(corsOptions));

app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Titan Scrolling Game server listening at http://localhost:${port}`);
});