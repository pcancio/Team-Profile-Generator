// // In addition to Engineer's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Engineer = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return `${this.github}`;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;