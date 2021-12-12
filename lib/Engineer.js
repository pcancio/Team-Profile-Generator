// // In addition to Engineer's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Engineer = require('./Engineer');

class Engineer extends Engineer {
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