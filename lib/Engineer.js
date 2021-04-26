// Import Employee class
const Employee = require('./Employee');

class Engineer extends Employee  {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        // overriden to return 'Manager'
        return 'Manager';
    }
};

// Export Engineer class for use in other files
module.exports = Engineer;