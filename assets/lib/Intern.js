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
        // returns inter's school name
        return this.school;
    }

    getTitle() {
        // returns intern's full job title
        return this.title;
    }

    getRole() {
        // override to return 'Intern'
        return 'Intern';
        // or could do return this.title?; but not making it return this.title since title could be more specific than overall role of intern (i.e. Arts Administration Intern)
    }
};
const employee1 = new Intern ('Danny S', '24601', 'dskinner@gmail.com', 'Engineering Intern', 'Elon');
// console.log(employee1.getRole());
// console.log(employee1.getTitle());
// console.log(employee1.getSchool());
// console.log(employee1);

// Export Intern class for use in other files
module.exports = Intern;