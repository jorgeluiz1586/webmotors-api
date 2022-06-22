const mysql = require('mysql');
const dbconnection = mysql.createConnection({
  host: 'localhost',
  user: 'webmotors_admin',
  password: '12345Webmotors',
  database: 'webmotors_db',
  port: 3308,
});

dbconnection.connect();

module.exports.db = dbconnection;