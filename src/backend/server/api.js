const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '456987',
    database: 'api'
});

module.exports = con;


