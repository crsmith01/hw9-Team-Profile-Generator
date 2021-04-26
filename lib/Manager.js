// Import Employee class
const Employee = require('./Employee');

class Manager extends Employee  {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        // overriden to return 'Manager'
        return 'Manager';
    }
}


// Explort Manager class for use in other files
module.exports = Manager;