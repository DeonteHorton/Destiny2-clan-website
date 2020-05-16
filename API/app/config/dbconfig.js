const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'destiny2_clan_info',
    dateStrings:true
})
module.exports = pool;