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

    getTitle() {
        // returns managers's full job title
        return this.title;
    }

    getRole() {
        // override to return 'Manager'
        return 'Manager';
        // not making it return this.title since title could be more specific than overall role of manager
    }
};

// const employee1 = new Manager ('Danny S', '24601', 'dskinner@gmail.com', 'Engineering Team Manager', '394');
// console.log(employee1.getRole());
// console.log(employee1.getTitle());
// console.log(employee1.getOfficeNumber());
// console.log(employee1);


// Explort Manager class for use in other files
module.exports = Manager;