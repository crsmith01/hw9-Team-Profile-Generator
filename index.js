//Import packages and files needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./generateHTML');

// Function to write html file
const writeToFile = (userInput) => {
    // Writes output of user's answers to a index.html file
    // ***Figure out how to create an output folder in which to put index.html 
    fs.writeFile('index.html', userInput, (error) =>
    // Ternary operator to account for errors and successes
    error ? console.log('Error! Something went wrong.') : console.log('Success! Your html file has been created.'));
};

// 
const teamArray = [];

// Function to initialize app 
const init = () => {
    createHTML();
    buildTeamMember();
};


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
                message: "Enter employe's ID number",
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
            .then(function({type, name, id, email})){
                let roleInformation = "";
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
                            type: 'input',
                            message: `Enter employee's ${roleInformation}:`,
                            name: 'roleInformation',
                        }
                        {
                            type: 'list',
                            message: 'Would you like to add more members to your team?',
                            choices: ['yes', 'no'],
                            name: 'buildMoreTeamMembers',
                        }
                ])
                .then(function({roleInformation, buildMoreTeamMembers}){
                    let addMember;
                    if (type === 'Manager'){
                        addMember = new Manager(name, id, email, roleInformation);
                    } else if (type === 'Engineer') {
                        addMember = new Engineer(name, id, email, roleInformation);
                    } else if (type === 'Intern') {
                        addMember = new Intern(name, id, email, roleInformation);
                    }
                    teamArray.push(addMember);
                    addEmployeeCardsHTML(addMember);
                    .then(function(){
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
      // Function to write html file
// const writeToFile = (userInput) => {
//     // Writes output of user's answers to a index.html file
//     // ***Figure out how to create an output folder in which to put index.html 
//     fs.writeFile('index.html', userInput, (error) =>
//     // Ternary operator to account for errors and successes
//     error ? console.log('Error! Something went wrong.') : console.log('Success! Your html file has been created.'));
// };
      fs.writeFile('./output/myteam.html', html, function(err) {
        // Ternary operator to account for errors and successes
        err ? console.log('Error! Something went wrong.') : console.log('Success! Your starting html file has been created.'));
      });


// Function to add middle part of html = emplyee cards
const addEmployeeCardsHTML = (employee) => {
    return new Promise(function(resolve, reject){
        const name = employee.getName();
        const id = employee.getID();
        const email = employee.getEmail();
        const role = employee.getRole();
        let cardHTML = "";
        if (role === 'Manager') {
            const officeNumber = employee.getOfficeNumber();
            // go back up and add title prompt if not there already
            const title = employee.getTitle();
            cardHTML =  `     <!-- Manager -->
            <div class="col-12 col-sm-6 col-lg-4 mb-3">
              <div class="card employee-card text-danger">
                <div class="card-header">
                  <h2 class="card-title">${name}</h5>
                  <!-- <h3 class="card-title">Manager<i class="fa fa-address-card-o"></i></h3>  -->
                  <h3 class="card-title">${type}<i class="fa fa-address-card-o"></i></h3> 
                </div>
                <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item">Title: ${title}</li>
                      <li class="list-group-item">ID: ${id}</li>
                      <li class="list-group-item">Email: <a href="${email]">${email}</a></li>
                      <li class="list-group-item">Office Number: ${office}</a></li>
                  </ul>
                </div>
              </div>
            </div>````

        } else if (role === 'Engineer') {
            const github = employee.getGithub();
            const title = employee.getTitle();
        }
    })

}


      <section class="row justify-content-around">


            // insert team here
            {{ team }}   
      
      
      </section>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> 
      </script>
     </body>
     </html>
     `

    
]

// Remember to come back and put these funcitons inside another function so that it keeps running until the whole team is built

// Array of questions about Manager for user to answer in Inquirer

            },
            {
                type: 'input',
                message: 'Enter office number',
                name: 'office',
            },
        ])
        .then((responses)) => {
            // Create a new Manager object with the responses from the above prompts
            const manager = new Manager (
                // Do these need more unique names - like specific to the manager??
                responses.name,
                responses.title,
                responses.id,
                responses.email,
                responses.officeNumber
            );
            // Figure out what to do / where to put this newly created Manager object
            // Move on to run the buildRemainingTeam funciton to build the rest of teh team
            buildRemainingTeam();
        } 
};

const buildRemainingTeam = () => {
    console.log('Now that you have a Manager, we can build the rest of your team!');
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What type of employee would you like to build?',
                name: 'buildTeamType',
                choices: ['Engineer', 'Intern', 'That is everyone on the team!'],
            },
        ])
        // does this need to be something differnet - other than responses?? - will it mix up the system???
        // maybe use input, userInput, userResponses, teamInput, etc.
        .then((response) => {
        // 3 options - buildEngineer, buildIntern, or finishTeamBuild - depending on user response
            if(response.buildTeamType === 'Engineer') {
                engineerBuild();
            } else if (response.buildTeamType === 'Intern') {
                internBuild();
            } else {
                finishTeamBuild();
            }
        });
    };
// Build an enginner if user selects Engineer in buildRemainingTeam function
const engineerBuild = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter employee name',
                name: 'name',
                // Validation so user must enter a name for employee
                validate: (response) => {
                    if (response !== '') {
                        return true;
                    } else
                    return 'You must enter a name.';
                }
            },
            {
                type: 'input',
                message: 'Enter job title',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Enter employe ID number',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Enter email address?',
                name: 'email',
                // Validation for email - ^\S+@\S+$ - catches the most obvious syntax errors
                // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
                validate: (response) => {
                    const emailValid = response.match(/\S+@\S+\.\S+/);
                    if (emailValid) {
                        return true;
                    } else
                    return 'Invalid email address. Please enter a valid email address.'
                }
            },
            {
                type: 'input',
                message: 'Enter GitHub username',
                name: 'github',
            },
        ])
        // Create a new Engineer object based on these responses
        .then((responses) => {
            const engineer = new Engineer(
                responses.name,
                responses.title,
                responses.id,
                responses.email,
                responses.github
            );
            // Figure out what to do / where to put this newly created Manager object
            // Move on to run the buildRemainingTeam funciton to build the rest of teh team
            buildRemainingTeam();
        });
    }



// Build an intern if user selects intern in buildRemainingTeam function
const internBuild = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter employee name',
                name: 'name',
                // Validation so user must enter a name for employee
                validate: (response) => {
                    if (response !== '') {
                        return true;
                    } else
                    return 'You must enter a name.';
                }
            },
            {
                type: 'input',
                message: 'Enter job title',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Enter employe ID number',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Enter email address?',
                name: 'email',
                // Validation for email - ^\S+@\S+$ - catches the most obvious syntax errors
                // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
                validate: (response) => {
                    const emailValid = response.match(/\S+@\S+\.\S+/);
                    if (emailValid) {
                        return true;
                    } else
                    return 'Invalid email address. Please enter a valid email address.'
                }
            },
            {
                type: 'input',
                message: 'Enter school',
                name: 'school',
                // Validation for school - must enter a school name
                validate: (response) => {
                    if (response !== '') {
                        return true;
                    } else
                    return 'You must enter a school name.';
                }
            },
        ])
        // Create a new Intern object based on these responses
        .then((responses) => {
            const intern = new Intern(
                responses.name,
                responses.title,
                responses.id,
                responses.email,
                responses.school
            );
            // Figure out what to do / where to put this newly created Manager object
            // Move on to run the buildRemainingTeam funciton to build the rest of teh team
            buildRemainingTeam();
        });
])

};







// Below = all if it needs to be reorganized


// Will need to split up since different employee types have different questions??
// Function to fire up Inquirer and populate with the questions array
const promptUserManager = () => {
    console.log('Welcome! Let us get started building your team!');
    return inquirer.prompt(managerBuild);
}


// Function to initialize the app.
const init = () => {
  promptUserManager()
      .then((userAnswers) => {
          const markdown = generateHTML.generateHTML(userAnswers)
          writeToFile(markdown)
      })
};


// Function call to initialize the app
init();
