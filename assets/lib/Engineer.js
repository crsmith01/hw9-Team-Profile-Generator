// Import Employee class
const Employee = require('./Employee');

// Subclass - Engineer class extends Employee class
class Engineer extends Employee  {
    constructor(name, id, email, title, github) {
        super(name, id, email);
        this.title = title;
        this.github = github;
        // or do I want to make it `github.com/${github}`???
    }

    getGithub() {
        // returns' engineer's github username
        return this.github;
    }

    getTitle() {
        // returns engineer's full job title
        return this.title;
    }

    getRole() {
        // override to return 'Engineer'
        return 'Engineer';
        // not making it return this.title since title could be more specific than overall role of engineer

    }
};

// const employee1 = new Engineer ('Danny S', '24601', 'dskinner@gmail.com', 'Junior Engineer', 'dskinner01');
// console.log(employee1.getRole());
// // logs role as Employee AND Engineer
// console.log(employee1.getTitle());
// console.log(employee1.getGithub());


// Export Engineer class for use in other files
module.exports = Engineer;