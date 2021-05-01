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

    getRole() {
        // override to return 'Engineer'
        return 'Engineer';
        // not making it return this.title since title could be more specific than overall role of engineer

    }
};

// Export Engineer class for use in other files
module.exports = Engineer;