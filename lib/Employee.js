// Create Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        // override to return Employee
        return `Employee`;
    }
};

// Explort Employee class for use in other files
module.exports = Employee;