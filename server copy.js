const express = require('express');
const bodyParser = require('body-parser');
const { ValidationError } = require('express-json-validator-middleware');

const app = express();

const serverPort = 4242;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', require('./src/api'));

// error handler for validation errors
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        console.log("error");
        // At this point you can execute your error handling code
        res.status(400).send('invalid');
        next();
    }
    else next(err); // pass error on if not a validation error
});

// listen for requests
app.listen(serverPort, () => {
    console.log("Server is listening on port " + serverPort);
});

module.exports = app;