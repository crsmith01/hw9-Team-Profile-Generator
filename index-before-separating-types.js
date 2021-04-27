//Import packages and files needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./generateHTML');

// Function to write README file
const writeToFile = (userInput) => {
    // Writes output of user's answers to a index.html file
    // ***Figure out how to create an output folder in which to put index.html 
    fs.writeFile('index.html', userInput, (error) =>
    // Ternary operator to account for errors and successes
    error ? console.log('Error! Something went wrong.') : console.log('Success! Your html file has been created.'));
};


// Array of questions about Manager for user to answer in Inquirer
const managerBuild = [
    {
        type: 'list',
        message: 'What type of employee would you like to build?',
        name: 'type',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        message: 'Enter name',
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
        // validation for email - ^\S+@\S+$ - catches the most obvious syntax errors
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
    {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter school',
        name: 'school',
    },

];




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
