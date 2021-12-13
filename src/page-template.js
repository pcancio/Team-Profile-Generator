//create the team
const generateTeam = team => {
    // create manager card
    const generateManager = manager => {
        return `<div class = "card employee-card" >
            <div class = "card-header bg-primary text-light text-center">
            <h2 class = "card-title">${manager.getName()}</h2>  
            <h3 class = "card-subtitle"><i class="fas fa-people-arrows"> ${manager.getRole()}</i></h3>      
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
        return `<div class = "card employee-card">
        <div class = "card-header bg-primary text-light text-center">
        <h2 class = "card-title">${engineer.getName()}</h2>  
        <h3 class = "card-subtitle"><i class="fas fa-user-astronaut"> ${engineer.getRole()}</i></h3>        
        </div>  
        <div class = "card-body">
        <ul class = "list-group">
        <li class = "list-group-item"> ID: ${ engineer.getId()} </li>  
        <li class = "list-group-item"> Email: <a href = "mailto:${engineer.getEmail()}"> ${engineer.getEmail()} </a> </li>
        <li class = "list-group-item"> Github: <a href = "https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a> </li>
        </ul> 
        </div> 
        </div>`;
    };
    // create intern card
    const generateIntern = intern => {
        return `<div class = "card employee-card">
    <div class = "card-header bg-primary text-light text-center">
    <h2 class = "card-title">${intern.getName()}</h2>  
    <h3 class = "card-subtitle"> <i class="fas fa-rocket"> ${intern.getRole()}</i> </h3 >   
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/cc59cd1bed.js" crossorigin="anonymous"></script>
        </head>
    <body>
    <header class ="container-fluid">
    <div class= "row">
    <div class="col-12 jumbotron mb-3 team-heading">
        <h1 class ="text-center">My Team</h1>
        </div>
        </div>
        </header>
      
        <div class = "container">
        <div class = "row">
        <div class = "team-area col-12 d-flex justify-content-center">
        ${generateTeam(teamMembers)}
        </div>
        </div>
        </div>
    </body>
    </html>`;

};