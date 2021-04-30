// Import Employee class
const Employee = require('./Employee');

class Manager extends Employee  {
    constructor(name, id, email, title, officeNumber) {
        super(name, id, email);
        this.title = 'Manager';
        this.officeNumber = officeNumber;
    }
    // renamed method officeNum since officeNumber made this.officeNumber yellow like a function
    officeNum() {
        return this.officeNumber;
    }    

    getRole() {
        // override to return 'Manager'
        return 'Manager';
    }
};


// Explort Manager class for use in other files
module.exports = Manager;