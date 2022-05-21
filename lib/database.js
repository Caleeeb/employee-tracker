// talked with tutor, we got to the conclusion of using a class ...
// ... keeping the queries in an object so I can use dot notation when needed.

class Database {
    constructor(connection) {
        this.connection = connection;
    };
    // bundle of queries
    getAllRoles() {
        return this.connection.query(
            //query
        )
    };
    getAllEmployees() {
        return this.connection.query(
            //query
        )
    }

}