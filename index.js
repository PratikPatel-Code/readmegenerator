// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer.prompt([{
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description of the project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for the project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How do you use this project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Using github usernames, are there any other contributers to the project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Provide details about how to test the project",
        name: "tests"
    },
    {
        type: "list",
        message: "What license are you using?",
        name: "license",
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License',
            'MIT License',
            'BSD 2 Clause Simplified License',
            'BSD 3 Clause New or Revised License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1 .0 Universal',
            'Ecliplse Public License 2.0',
            'GNU Affero General Public License v3 .0',
            'GNU General Public License v2 .0',
            'GNU Lesser General Public License v2 .1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ]
    }
]).then(answers => {
    //console.log(answers);
    const readME = `# Project Title

    ##  Table of Contents:
    * [Description(](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    #
    ## Description:
    ${answers.description}
    
    #
    ## Installation:
    ${answers.installation}

    #
    ## Usage
    ${answers.usage}

    #
    ## License:
    ${answers.license}
    
    #
    ## Contributing:
    ${answers.contributing}
    
    #
    ## Tests:
    ${answers.tests}
    
    #
    ## Questions
    If you have any questions about the project you can contact me via email or GitHub
    Email: ${answers.email}
    GitHub Profile: ${answers.username}
      
    `;
    //console.log(readME);
    fs.writeFile("README.md", readME, err => err ? console.log.error(err) : "");
});

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();