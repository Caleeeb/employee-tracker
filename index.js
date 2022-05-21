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
    "Update an employee role",
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
            await viewAllRoles();
            await mainMenuOptions();
            break;
        }
        case "View all employees": {
            await viewAllEmployees();
            await mainMenuOptions();
            break;
        }
        case "Add a department": {
            await createNewDepartment();
            await mainMenuOptions();
            break;
        }
        case "Add a role": {
            await createNewRole();
            await mainMenuOptions();
            break;
        }
        case "Add a employee": {
            await createEmployee();
            await mainMenuOptions();
            break;
        }
        case "Update an employee role": {
            await updateEmployeeRole();
            await mainMenuOptions();
            break;
        }
        case "Exit":
            runExit();
            break;
    }
};

// inquirer questions 

async function viewAllEmployees() {
    const db = new Database(connection);
    const employees = await db.viewAllEmployees();
    console.table(employees);
};

async function viewAllRoles() {
    const db = new Database(connection);
    const roles = await db.viewAllRoles();
    console.table(roles);

};

async function viewAllDepartments() {
    const db = new Database(connection);
    const departments = await db.viewAllDepartments();
    console.table(departments);
};

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
};

async function createNewRole() {
    const db = new Database(connection);
    const allDepartments = await db.viewAllDepartments();
    const departmentNames = allDepartments.map(department => {
        return {
            name: department.name,
            value: department.id
        }
    });
    const answer = await inquire.prompt(
        [{
            type: "input",
            message: "What is the title of this role?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the salary of this role?",
            name: "salary"
        },
        {
            type: "list",
            message: "Which department does this role belong to?",
            choices: departmentNames,
            name: "department_id"
        }])
        .then(role => {
            console.log(role);
            db.createNewRole(role);
        });
};

async function createNewDepartment() {
    const db = new Database(connection);
    await inquire.prompt(
        {
            type: "input",
            message: "What is the name of the new department?",
            name: 'name'
        }
    )
        .then(name => {
            console.log(name);
            db.createNewDepartment(name);
        });
};

async function updateEmployeeRole() {
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
    const answer = await inquire.prompt(
        [{
            type: "list",
            message: "Which employee would you like to update?",
            choices: employeeNames,
            name: "id"
        },
        {
            type: "list",
            message: "What would you like to assign as this employee's new role?",
            choices: employeeRoles,
            name: "role_id"
        }
        ])
        .then(role => {
            console.log(role);
            db.updateEmployeeRole(role.role_id, role.id);
        });
};

async function runExit() {
    process.exit(0);
};

mainMenuOptions();