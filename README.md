# 10 Object-Oriented Programming: Team Profile Generator

## Description

This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. It also includes a unit test for each part of the code since testing is key to making code maintainable.


## Table of Contents
1. [Technologies Used](#Technologies-Used)
2. [User Stort](#User-Story)
3. [Acceptance Criteria](#Acceptance-Criteria)
4. [Mock Up](#Mock-Up)
5. [Test](#Tests)
6. [Contact](#Contact)
7. [License](#License)


## Technologies Used
```
1. JavaScript
2. Node.js
3. Inquirer
4. Bootstrap
5. HTML
6. Jest
```


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input:
1. WHEN I am prompted for my team members and their information,
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input.
2. WHEN I click on an email address in the HTML,    
    THEN my default email program opens and populates the TO field of the email with the address.
3. WHEN I click on the GitHub username,
    THEN that GitHub profile opens in a new tab.
4. WHEN I start the application,
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number.
5. WHEN I enter the team manager’s name, employee ID, email address, and office number,
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team.
6. WHEN I select the engineer option,
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu.
7. WHEN I select the intern option,
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.
8. WHEN I decide to finish building my team,
    THEN I exit the application, and the HTML is generated.
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./______________)

## Tests
Tests were written with jest. To run tests, enter the following in your command-line: npm run test

## Contact
If you have any questions about the repo, contact me at [crsmith01](https://github.com/crsmith01).


## License
Copyright 2021 Catherine Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.