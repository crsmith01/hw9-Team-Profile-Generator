// Create Employee class - the main class from which the subclasses (Intern, Engineer, and Manager) extend
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
// const employee1 = new Employee ('Danny S', '24601', 'dskinner@gmail.com');
// console.log(employee1.getName());
// console.log(employee1.getID());
// console.log(employee1.getEmail());
// console.log(employee1.getRole());

// Explort Employee class for use in other files
module.exports = Employee;