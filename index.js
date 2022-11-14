// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // third-party inquirer package
const fs = require('fs'); // reads/writes the files from/to the computer
const generateMarkdown = require('./generateMarkdown.js') // works with other JS files

// TODO: Create an array of questions for user input
const questions = [
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log("Please enter your username.");
            return false;
          }
        }
      },

      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email.");
            return false;
          }
        }
      },
    {
      type: "input",
        name: "title",
        message: "What is your project's name?",
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter your project title.");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "description",
        message: "Briefly give an explanation of your project/application.",
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please write a short description of the project/application.");
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license is used for this project:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'BSD 3-Clause', 'None'],
      },
      {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
        suggestions: ['npm i', 'None']
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        suggestions: ['npm test', 'None']
      },
      {
        type: "input",
        name: "usage",
        message: "What does user need to know about using the repo?",
        suggestions: ['None']
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
        suggestions: ['None']
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./generated/README.md", generateMarkdown(data), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('README.md is successfully generated!');
  });}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
