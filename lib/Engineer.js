// Import Employee class
const Employee = require('./Employee');

class Engineer extends Employee  {
    constructor(name, id, email, title, github) {
        super(name, id, email);
        this.title = 'Engineer';
        this.github = github;
        // or do I want to make it `github.com/${github}`???
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        // override to return 'Engineer'
        return 'Engineer';
    }
};

// Export Engineer class for use in other files
module.exports = Engineer;