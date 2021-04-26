const Employee = require('./Employee');

class Engineer extends Employee  {
    constructor(name, id, email) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        
    }

    getRole() {
        // overriden to return 'Manager'
    }
}