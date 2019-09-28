const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

const con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '456987',
    database: 'api'
});

const server = app.listen(4545, ()=>{
    const host = server.address().address
    const port = server.address().port
    console.log('hello');
});

con.connect((error)=>{
    if(error) console.log(error);
    else console.log('conectado!');
});

app.use(cors());

app.use(require('../routes/routes'))