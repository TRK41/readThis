// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const writeFile = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input

// const licenses = ({
//     {
//         name:MIT
//     }
// })

const questions = ([
    {
        type: 'input',
        message: 'What is your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project?',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have ?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {

        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
    },
    {
        type: 'input',
        message: 'What command should be run to test?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribute',
    },
])
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            // TODO: Create a function to write README file
            const filename = `${data.title.toLowerCase().split('').join('')}.md`;
            fs.writeFile(filename, generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        })
        
}

// // Function call to initialize app
init();
