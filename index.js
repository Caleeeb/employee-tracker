const inquire = require('inquirer');
const Database = require('./lib/database');
const connection = require('./lib/connection');

// IF I HAVE TIME: | bonus | view employee via manager or department, update employee, delete department or role or employee, view total salaries for each department

// array list for options for the mainMenuOptions

let mainMenuOptionsList = [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add a employee",
    "Update an employee",
    "Exit"
]

// display options like a main menu
async function mainMenuOptions() {
    inquire.prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: mainMenuOptionsList
    }
    ])
        .then((answer) => {
            answerPusher(answer);
        });
};

async function answerPusher(answer) {
    switch (answer.choice) {
        case "View all departments": {
            await viewAllDepartments();
            await mainMenuOptions();
            break;
        }
        case "View all roles": {
            await mainMenuOptions();
            break;
        }
        case "View all employees": {
            await viewAllEmployees();
            await mainMenuOptions();
            break;
        }
        case "Add a department": {
            await mainMenuOptions();
            break;
        }
        case "Add a role": {
            await mainMenuOptions();
            break;
        }
        case "Add a employee": {
            await createEmployee();
            break;
        }
        case "Update an employee": {
            await mainMenuOptions();
            break;
        }
        default: {
            break;
        }
    }
}





// inquirer questions
// 
async function createEmployee() {
    const db = new Database(connection);
    const allEmployees = await db.viewAllEmployees();
    const employeeNames = allEmployees.map(employee => {
        return {
            name: employee.first_name + " " + employee.last_name,
            value: employee.id
        }
    });
    const allRoles = await db.viewAllRoles();
    const employeeRoles = allRoles.map(role => {
        return {
            name: role.title,
            value: role.id
        }
    });
    // create a prompt to ask the first_name, last_name, and role\
    const answer = await inquire.prompt(
        [{
            type: "input",
            message: "What is the employee's name?",
            name: 'first_name'
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: 'last_name',
        },
        {
            type: "list",
            message: "What role will this employee have?",
            choices: employeeRoles,
            name: "role_id"
        },
        {
            type: "list",
            message: "Who is this employee's manager?",
            choices: employeeNames,
            name: "manager_id"
        }])
        .then(employee => {
            console.log(employee);
            db.createNewEmployee(employee);
        });
    mainMenuOptions();
}

async function createRole() {

}

async function createDepartment() {

}

async function viewAllEmployees() {
    const db = new Database(connection);
    const employees = await db.viewAllEmployees();
    console.table(employees);
}

async function viewAllRoles() {

}

async function viewAllDepartments() {
    const db = new Database(connection);
    const departments = await db.viewAllDepartments();
    console.table(departments);
}

mainMenuOptions();