var express = require('express');
var router = express.Router();

require('./routes/ship.routes')(router);

module.exports = router;