// In addition to Engineer's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

const Engineer = require('./Engineer');

class Intern extends Engineer {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;