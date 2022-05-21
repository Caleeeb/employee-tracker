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
        )
    };
    viewAllEmployees() {
        return this.connection.query(
            // query
        )
    };
    viewAllDepartments() {
        return this.connection.query(
            // query
        )
    };
    createNewRole() {
        return this.connection.query(
            // query
        )
    };
    createNewEmployee() {
        return this.connection.query(
            // query
        )
    };
    createNewDepartment() {
        return this.connection.query(
            // query
        )
    }
}

module.exports = Database;