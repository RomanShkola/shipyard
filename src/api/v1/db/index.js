const Pool = require('pg').Pool;
const pgConf = require('./config/db.config');

const pool = new Pool(pgConf);
console.log("Database pool created");

module.exports = pool;