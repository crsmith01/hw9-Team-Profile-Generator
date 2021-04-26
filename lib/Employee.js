class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }

    getEmail() {

    }

    getRole() {
        return `Employee`;
    }
};

module.exports = Employee;