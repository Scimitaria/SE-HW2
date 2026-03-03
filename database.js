let mySQL = require('mysql2');
require('dotenv').config();

var connection = mySQL.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});
connection.connect((err => {
    if(err) throw err;
    console.log('MySQL Connected');
}));

module.exports = connection;
