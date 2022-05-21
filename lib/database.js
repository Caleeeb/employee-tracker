

// talked with tutor, we got to the conclusion of using a class ...
// ... keeping the queries in an object so I can use dot notation when needed.

class Database {
    constructor(connection) {
        this.connection = connection;
    };
    // bundle of queries
    viewAllRoles() {
        return this.connection.query(
            // query
            `SELECT * FROM roles`
        )
    };
    viewAllEmployees() {
        return this.connection.query(
            // query
            `SELECT * FROM employees`
        )
    };
    viewAllDepartments() {
        return this.connection.query(
            // query
            `SELECT * FROM departments`
        )
    };
    createNewRole() {
        return this.connection.query(
            // query
        )
    };
    createNewEmployee(employee) {
        return this.connection.query(
            // query
            `INSERT INTO employees SET ?`, employee
        )
    };
    createNewDepartment(name) {
        return this.connection.query(
            // query
            `INSERT INTO deparmtents (name) VALUES (${name})`
        )
    }
}

module.exports = Database;