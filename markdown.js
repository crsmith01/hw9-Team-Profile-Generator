// Change to make it html 
// Add sections for what type of employee
// (Arrow) function to dynamically create the README file with template literal, inserting user responses from the prompts in Inquirer
const generateHTML = (responses) => {
    // Destructuring the user's responses (makes drier code in the template literal section) (from activities 25&26 in week 9)
    const { project, description, dependencies, repo, license, contributing, test, email, username } = responses;
  
    return `
    ## Project Name
    ${project}
  
    ${licenseBadge}
  
    ## Description
    ${description}
  
    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [License](#License)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [Questions](#Questions)
  
    ## Installation
    To install necessary dependencies, run the following command: ${dependencies}
  
    ## Usage
    ${repo}
  
    ## License
    ${licenseBadge}
    This project is licensed under the ${license} license. [Read more here.](${licenseURL})
  
    ## Contributing
    ${contributing}
  
    ## Tests
    To run tests, run the following command: ${test}
  
    ## Questions
    If you have any questions about the repo, either open an issue or contact me directly at ${email}. You can find more of my work at ${username}.
    `
  };
  
  // Exports this file so the content can be used in other files (in this case, index.js)
  module.exports = {
    generateMarkdown
  }