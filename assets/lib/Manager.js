// Import Employee class
const Employee = require('./Employee');

// Subclass - Intern class extends Employee class
class Manager extends Employee  {
    constructor(name, id, email, title, officeNumber) {
        super(name, id, email);
        this.title = title;
        this.officeNumber = officeNumber;
    }
    // renamed method since officeNumber made this.officeNumber yellow like a function
    getOfficeNumber() {
        // returns manager's office number
        return this.officeNumber;
    }    

    getRole() {
        // override to return 'Manager'
        return 'Manager';
        // not making it return this.title since title could be more specific than overall role of manager
    }
};


// Explort Manager class for use in other files
module.exports = Manager;