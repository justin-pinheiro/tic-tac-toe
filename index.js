const { Socket } = require('socket.io');

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const port = 8080;

const io = require('socket.io')(http);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'templates/base.html'));
});

http.listen(port, () => {
    console.log(`listening on http://localhost:${port}/`)
})