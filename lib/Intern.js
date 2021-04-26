const Employee = require('./Employee');

class Intern extends Employee  {
    constructor(name, id, email) {
        super(name, id, email);
        this.school = this.school;
    }

    getSchool() {

    }

    getRole() {
        // overriden to return 'Intern'
    }
}