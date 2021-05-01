// Create Employee class - the main class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // returns employee's name
        return this.name;
    }

    getID() {
        // returns employee's id number
        return this.id;
    }

    getEmail() {
        // returns employee's email address
        return this.email;
    }

    getRole() {
        // returns 'Employee'
        return `Employee`;
    }
};

// Explort Employee class for use in other files
module.exports = Employee;