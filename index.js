const express = require('express');
const config = require('config');
const app = express();
const port = config.get('server.port');
const host = config.get('server.host');


app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = app.listen(port, host, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${host}:${server.address().port}`);
});