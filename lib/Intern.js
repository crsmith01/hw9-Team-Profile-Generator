// Import Employee class
const Employee = require('./Employee');

class Intern extends Employee  {
    constructor(name, id, email) {
        super(name, id, email);
        this.school = this.school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        // overriden to return 'Intern'
        return 'Intern';
    }
}

// Export Intern class for use in other files
module.exports = Intern;