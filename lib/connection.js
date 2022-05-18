const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Htg2)KZWvJisDb',
        database: 'employees_db'
    },
    console.log('Connected to the employee_db database.')
);

module.exports = connection;