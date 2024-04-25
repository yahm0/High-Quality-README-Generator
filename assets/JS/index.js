// Author: Adam Nuccio
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMD.js');

// Array of questions for user input and license choices
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:'
    },
    {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:'
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information:'
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines:'
    },
    {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions:'
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
    }
];


// Function to write README file
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('README.md has been generated!');
            }
        });
    });
}

// Function call to initialize app

function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('README.md has been generated!');
            }
        });
    });
}