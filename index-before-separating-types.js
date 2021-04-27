//Import packages and files needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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

// Remember to come back and put these funcitons inside another function so that it keeps running until the whole team is built

// Array of questions about Manager for user to answer in Inquirer
const managerBuild = () => {
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
                buildEngineer();
            } else if (response.buildTeamType === 'Intern') {
                buildIntern();
            } else {
                finishTeamBuild();
            }
        });
    };
// Build an enginner if user selects Engineer in buildRemainingTeam function
const buildEngineer = () => {
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
const buildIntern = () => {
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
