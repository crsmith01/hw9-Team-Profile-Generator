//Import packages and files needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { start } = require('repl');


// Empty team array to start, will populate with new employee data when pushed
const teamArray = [];

// Function to begin build new team members
const buildTeamMember = () => {
    console.log('Welcome! Let us get started building your team!');
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What type of employee would you like to build?',
                name: 'type',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
            {
                type: 'input',
                message: "Enter employee's name:",
                name: 'name',
                // Validation so user must enter a name for employee
                // from npm docs: "validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.""
                // on format and testing validationin Inquirer: https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
                validate: (response) => {
                    if (response !== '') {
                        return true;
                    } else
                    return 'You must enter a name.';
                }
            },
            {
                type: 'input',
                message: "Enter employee's job title:",
                name: 'title',
            },
            {
                type: 'input',
                message: "Enter employee's ID number",
                name: 'id',
            },
            {
                type: 'input',
                message: "Enter employee's email address:",
                name: 'email',
                // Validation for email - ^\S+@\S+$ - catches the most obvious syntax errors
                // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
                validate: (response) => {
                    const emailValid = response.match(/\S+@\S+\.\S+/);
                    if (emailValid) {
                        return true;
                    } else
                    return 'Invalid email address. Please enter a valid email address (in the form of ___@__.___).'
                },
            }])
            .then(function({type, name, id, email}) {
                let roleInformation = "";
                // Each of the three types of employees has 1 unique feature to them. This let's us get that information in a somewhat succinct way.
                if (type === 'Manager') {
                    roleInformation = 'office number';
                } else if (type === 'Engineer'){
                    roleInformation = 'GitHub username';
                } else if (type === 'Intern') {
                    roleInformation = 'school name';
                }
                inquirer
                    .prompt([
                        {
                          // Place to input that category of information unique to each employee type
                            type: 'input',
                            message: `Enter employee's ${roleInformation}:`,
                            name: 'roleInformation',
                        },
                        {
                            type: 'list',
                            message: 'Would you like to add more members to your team?',
                            choices: ['yes', 'no'],
                            name: 'buildMoreTeamMembers',
                            // Should come back and add some kind of validation / requirement that you have at least another person on the team besides the first one created.
                        }
                ])
                // creating new object for the respective employee type chosen
                .then(function({roleInformation, buildMoreTeamMembers}){
                    let addMember;
                    if (type === 'Manager'){
                        addMember = new Manager(name, id, email, roleInformation);
                    } else if (type === 'Engineer') {
                        addMember = new Engineer(name, id, email, roleInformation);
                    } else if (type === 'Intern') {
                        addMember = new Intern(name, id, email, roleInformation);
                    }
                    // Add new member info - first to team array, then to HTML
                    teamArray.push(addMember);
                    addEmployeeCardsHTML(addMember)
                    .then(function(){
                      // If user selects 'yes' to the prompt about adding more team members, loop back to start of buildTeamMember() function. Otherwise, run the closingHTML() function.
                        if (buildMoreTeamMembers === 'yes') {
                            buildTeamMember();
                        } else {
                            closingHTML();
                        }
                    });
                });
            });
        };

           

// I'm breaking down the HTML into 3 sections: beginning (head through part of body), middle (where the team cards go), and closing (rest of body and closing tags).
const beginningHTML = () => {
    const startHTML = 
    `<!DOCTYPE html>
    <html lang="en-US">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel = stylsheet href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous">
      </script>
      <title>My Team</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4 d-flex justify-content-center text-warning">My Team</h1>
        </div>
      </div>`
      // Function to write html file to the output folder
      fs.writeFile('./output/myteam.html', startHTML, function(err) {
        // Ternary operator to account for errors and successes
        err ? console.log('Error! Something went wrong.') : console.log('Success! Your starting html file has been created.');
      });


// Function to add middle part of html = emplyee cards
const addEmployeeCardsHTML = (employee) => {
    return new Promise(function(resolve, reject){
        const name = employee.getName();
        const id = employee.getID();
        const email = employee.getEmail();
        const role = employee.getRole();
        // Changed from const cardHTML to let cardHTML because it's going to be changed with each option
        let cardHTML = '';
        if (role === 'Manager') {
            const officeNumber = employee.getOfficeNumber();
            const title = employee.getTitle();
            cardHTML =  `
            <div class="col-12 col-sm-6 col-lg-4 mb-3">
              <div class="card employee-card text-danger">
                <div class="card-header">
                  <h2 class="card-title">${name}</h5>
                //   Is this fa working???
                  <h3 class="card-title">Manager<i class="fa fa-address-card-o"></i></h3>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item">Title: ${title}</li>
                      <li class="list-group-item">ID: ${id}</li>
                      <li class="list-group-item">Email: <a href="${email}">${email}</a></lli>
                      <li class="list-group-item">Office Number: ${officeNumber}</a></li>
                  </ul>
                </div>
              </div>
             </div>
             <section class="row justify-content-around">
             `;

        } else if (role === 'Engineer') {
            const github = employee.getGithub();
            const title = employee.getTitle();
            cardHTML = `
            <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card employee-card text-primary">
              <div class="card-header">
                <h2 class="card-title">${name}</h5>
                <!-- <h3 class="card-title">Engineer<i class="fa fa-cogs"></i></h3>  -->
              </div>
              <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Title: ${title}</li>
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="${email}">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
                </ul>
              </div>
            </div>
          </div>`;
        } else if (role === 'Intern') {
            const school = employee.getSchool();
            const title = employee.getTitle();
            cardHTML = `
            <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card employee-card text-success">
              <div class="card-header">
                <h2 class="card-title">${name}</h5>
                <!-- <h3 class="card-title">Intern<i class="fa fa-graduation-cap"></i></h3>  -->
              </div>
              <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Title: ${title}</li>
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</a></li>
                </ul>
              </div>
            </div>
          </div>`;
        }
        fs.appendFile('./output/myteam.html', cardHTML, function(err) {
            // Ternary operator to account for errors and successes
            err ? console.log('Error! Something went wrong.') : console.log('Success! The employee section of your html file has been created.');
          });    
        })

}

// Function to create the closing html
const closingHTML = () => {
    const endingHTML = `
      </section>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> 
      </script>
     </body>
     </html>
     `; 
    //  Append the closing HTML to myteam.html
    fs.appendFile('./output/myteam.html', endingHTML, function(err) {
    // Ternary operator to account for errors and successes
    err ? console.log('Error! Something went wrong.') : console.log('Success! The html file has been completed.');
    });   
};


// Function to initialize app 
const init = () => {
  buildTeamMember();
  beginningHTML();
};

// Function call to initialize the app
init()};
