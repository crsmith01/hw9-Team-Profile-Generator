// Import Employee class
const Employee = require('./Employee');

class Intern extends Employee  {
    constructor(name, id, email, title, school) {
        super(name, id, email);
        this.title = 'Intern';
        this.school = this.school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        // override to return 'Intern'
        return 'Intern';
    }
}

// Export Intern class for use in other files
module.exports = Intern;