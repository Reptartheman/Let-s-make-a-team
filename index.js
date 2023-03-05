// we need to bring in our file system
// we need our paths
// we need inquirer
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// we need our extensions of our Employee class

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const testQuestions = {
    type: 'list', 
    name: 'Simple test',
    message: 'Is the question showing up in the console?',
    choices: [
        'Yes',
        'No',
    ]
}

const init = () => {
    inquirer.prompt(testQuestions)
}

init();

