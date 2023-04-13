const mysql = require('mysql');
require('dotenv').config()


const pool = mysql.createPool({
    connectionLimit:10,
    host: process.env.REACT_APP_URL,
    user:'root',
    password:'',
    database:'destiny2_clan_info',
    dateStrings:true
})
module.exports = pool;