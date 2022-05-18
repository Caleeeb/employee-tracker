const inquire = require('inquirer');
const mysql = require('mysql2');


async function init() {
    // initial connection to the database
    const db = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'employees_db'
        },
        console.log('Connected to the ')
    );

}