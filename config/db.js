const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'store_order'
})

module.exports = db;