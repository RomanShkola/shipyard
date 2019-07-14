const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const serverPort = 4242;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', require('./src/api'));

// listen for requests
app.listen(serverPort, () => {
    console.log("Server is listening on port " + serverPort);
});

module.exports = app;