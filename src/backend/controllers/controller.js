const con = require('../server/api');

module.exports = {

    index(req, res) {
        con.query('SELECT * FROM principal',(error, rows)=>{
            if(!!error) console.log('error');
            else{
                console.log(rows);
                res.send(rows);
            }
        });
    }

}