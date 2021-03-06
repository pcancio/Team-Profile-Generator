// const declarations 
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const render = require('./src/page-template.js');
let teamMembers = [];

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, Engineer ID, email address, and office number
createManager = () => {
        console.log('Please build your team');
        return inquirer.prompt([

                {
                    type: 'input',
                    name: 'managerName',
                    message: "What is the manager's name?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter manager's name.")
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: "What is the manager's ID?",
                    validate: managerId => {
                        if (managerId) {
                            return true;
                        } else {
                            console.log("Please enter manager's Id.")
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "What is the manager's email?",
                    validate: managerEmail => {
                        if (managerEmail) {
                            return true;
                        } else {
                            console.log("Please enter manager's email.")
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'managerNumber',
                    message: "What is the manager's office number?",
                    validate: managerNumber => {
                        if (managerNumber) {
                            return true;
                        } else {
                            console.log("Please enter manager's office number.")
                            return false;
                        }
                    }
                }
            ])
            // push user input to a new object
            .then(managerAns => {
                const manager = new Manager(managerAns.managerName, managerAns.managerId, managerAns.managerEmail, managerAns.managerNumber);
                teamMembers.push(manager);
                nextEmployee()
            })
    }
    // WHEN I enter the team manager’s name, Engineer ID, email address, and office number
    // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    // WHEN I decide to finish building my team
    // THEN I exit the application, and the HTML is generated
const nextEmployee = () => {
        return inquirer.prompt([{
            type: 'list',
            name: 'nextEmployee',
            message: "What do you want to do next?",
            choices: ['Add Engineer', 'Add Intern', "I'm done - exit the profile generator"]

        }])

        // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        .then((data) => {

            switch (data.nextEmployee) {
                case "Add Engineer":
                    createEngineer();
                    break;
                case "Add Intern":
                    createIntern();
                    break;
                case "I'm done - exit the profile generator":
                    buildTeam();
                    break;

            }
        })
    }
    // prompt for Engineer data
const createEngineer = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'engineerName',
                message: "What is the Engineer's name?"

            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the Engineer's employee ID?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the Engineer's email?",
            },
            {
                type: 'input',
                name: 'engineerGit',
                message: "What is the Engineer's Github user name?",
            },

        ])
        // push user input to new object
        .then(engineerAns => {
            const engineer = new Engineer(engineerAns.engineerName, engineerAns.engineerId, engineerAns.engineerEmail, engineerAns.engineerGit);
            teamMembers.push(engineer);
            nextEmployee()
        })
};
// prompt for Intern data
const createIntern = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'internName',
                message: "What is the Intern's name?"

            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the Intern's employee ID?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the Intern's email?",
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the Intern's school?",
            }
        ])
        // push user input to new object
        .then(internAns => {
            const intern = new Intern(internAns.internName, internAns.internId, internAns.internEmail, internAns.internSchool);
            teamMembers.push(intern);
            nextEmployee()
        })
};
// get all data and build team
function buildTeam() {
    //    render(teamMembers);
    fs.writeFileSync('./dist/team.html', render(teamMembers), "utf-8")
}
// start app
createManager()