const inquire = require('inquirer');
const mysql = require('mysql2');
const Database = require('../lib/database');
const connection = require('../lib/connection');

const { createEmployee, createRole, createDepartment, viewAllEmployees, viewAllRoles, viewAllDepartments } = require('')

// IF I HAVE TIME: | bonus | view employee via manager or department, update employee, delete department or role or employee, view total salaries for each department

// array list for options for the mainMenuOptions

let mainMenuOptionsList = [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add a employee",
    "Exit"
]

// display options like a main menu
async function mainMenuOptions() {
    const choice = await inquire.prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: mainMenuOptionsList
    }
    ])
        .then((answer) => {
            answerPusher(answer);
        });
}




// inquirer questions
// async function createEmployee() {

// }

// async function createRole() {

// }

// async function createDepartment() {

// }

// async function viewAllEmployees() {
// }

// async function viewAllRoles() {

// }

// async function viewAllDepartments() {

// }
