//Import packages and files needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Function to write README file
const writeToFile = (userInput) => {
    // Writes output of user's answers to a index.html file
    // ***Figure out how to create an output folder in which to put index.html 
    fs.writeFile('index.html', userInput, (error) =>
    // Ternary operator to account for errors and successes
    error ? console.log('Error! Something went wrong.') : console.log('Success! Your html file has been created.'));
};


// Array of questions for user to answer in Inquirer
const questions = [
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


// Function to fire up Inquirer and populate with the questions array
const promptUser = () => {
    return inquirer.prompt(questions)
}


// Function to initialize the app.
// const init = () => {
//   promptUser()
//       .then((userAnswers) => {
//           const markdown = generateMarkdown.generateMarkdown(userAnswers)
//           writeToFile(markdown)
//       })
// };


// Function call to initialize the app
init();
