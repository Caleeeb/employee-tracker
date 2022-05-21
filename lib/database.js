

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
            `SELECT * FROM departments`
        )
    };
    createNewRole(role) {
        return this.connection.query(
            `INSERT INTO roles SET ?`, role
        )
    };
    createNewEmployee(employee) {
        return this.connection.query(
            `INSERT INTO employees SET ?`, employee
        )
    };
    createNewDepartment(name) {
        return this.connection.query(
            `INSERT INTO departments SET ?`, name
        )
    };
    updateEmployeeRole(roleId, employeeId) {
        return this.connection.query(
            `UPDATE employees SET role_id = ${roleId} WHERE id = ${employeeId}`
        )
    };
}

module.exports = Database;