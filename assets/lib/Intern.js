// Import Employee class
const Employee = require('./Employee');

// Subclass - Intern class extends Employee class
class Intern extends Employee  {
    constructor(name, id, email, title, school) {
        super(name, id, email);
        this.title = title;
        // or could do this.title = 'Intern';
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        // override to return 'Intern'
        return 'Intern';
        // or could do return this.title; but not making it return this.title since title could be more specific than overall role of intern (i.e. Arts Administration Intern)
    }
}

// Export Intern class for use in other files
module.exports = Intern;