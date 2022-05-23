const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'PUT YOUR USERNAME HERE',
        password: 'PUT PASSWORD HERE',
        database: 'employees_db'
    },
    console.log('Connected to the employee_db database.')
);

connection.query = util.promisify(connection.query);

module.exports = connection;