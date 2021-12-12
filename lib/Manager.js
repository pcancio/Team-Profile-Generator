// The other three classes will extend Engineer.

// In addition to Engineer's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'
const Engineer = require('./Engineer');

class Manager extends Engineer {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

}
module.exports = Manager;