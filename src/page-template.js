//create the team
const generateTeam = team => {
    // create manager card
    const generateManager = manager => {
        return `<div class = "card employee-card" >
            <div class = "card-header">
            <h2 class = "card-title"> ${manager.getName()} </h2>  
            <h3 class = "card-title"> <i class = "fas fa-mug-hot mr-2"> </i>${manager.getRole()}</h3 >
            </div>  
            <div class = "card-body">
            <ul class = "list-group">
            <li class = "list-group-item"> ID: ${ manager.getId()} </li>  
            <li class = "list-group-item"> Email: <a href = "mailto:${manager.getEmail()}"> ${manager.getEmail()} </a> </li>
            <li class = "list-group-item"> Office number: ${manager.getOfficeNumber()} </li> 
            </ul> 
            </div> 
            </div>`;
    };
    // create engineer card
    const generateEngineer = engineer => {
        return `<div class = "card employee-card" >
        <div class = "card-header">
        <h2 class = "card-title"> ${engineer.getName()} </h2>  
        <h3 class = "card-title"> <i class = "fas fa-glasses mr-2"> </i>${engineer.getRole()}</h3>
        </div>  
        <div class = "card-body">
        <ul class = "list-group">
        <li class = "list-group-item"> ID: ${ engineer.getId()} </li>  
        <li class = "list-group-item"> Email: <a href = "mailto:${engineer.getEmail()}"> ${engineer.getEmail()} </a> </li>
        <li class = "list-group-item"> Github username: ${engineer.getGithub()}</li>
        </ul> 
        </div> 
        </div>`;
    };
    // create intern card
    const generateIntern = intern => {
        return `<div class = "card employee-card">
    <div class = "card-header">
    <h2 class = "card-title"> ${intern.getName()} </h2>  
    <h3 class = "card-title"> <i class = "fas fa-user-graduate mr-2"> </i>${intern.getRole()}</h3 >
    </div>  
    <div class = "card-body" >

    <ul class = "list-group" >
    <li class = "list-group-item" > ID: ${ intern.getId()} </li>  
    <li class = "list-group-item" > Email: <a href = "mailto:${intern.getEmail()}"> ${intern.getEmail()} </a> </li>
    <li class = "list-group-item"> School: ${intern.getSchool()}</li>
    </ul> 
    </div> 
    </div>`;
    };
    const html = [];
    html.push(team
        .filter(Engineer => Engineer.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(Engineer => Engineer.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)).join("")
    );
    html.push(team
        .filter(Engineer => Engineer.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    return html.join("");
}

// export to generate page
module.exports = teamMembers => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https:://stackpath.bottstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    </head>
    <body>
        <header class ="container-fluid">
        <div class ="row">
        <div class ="col-12 jumbotron mb-3 team-heading">
        <h1 class ="text-center">Team Profile</h1>
        </div>
        </div>
        </div>
        <div class = "container">
        <div class = "row-flex">
        <div class = "team-area col-12 d-flex justify-content-center">
        ${generateTeam(teamMembers)}
        </div>
        </div>
        </div>
    </body>
    </html>`;

};