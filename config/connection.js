const mysql = require('mysql');
const mysql_data = require('./mysql_data.json');

const ObjetConnection = {
    host: mysql_data.host,
    port: mysql_data.port,
    user: mysql_data.user,
    pass: mysql_data.pass,
    database: mysql_data.mysql.database
}

const myConnection = mysql.createConnection(ObjetConnection);

module.exports = myConnection;