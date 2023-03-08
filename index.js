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

const generateHTML = require('./src/generateHTML');


const arrayForTeam = [];



function startApp(){
    console.log('Hello, welcome to the team creator app! Please fill in the fields below!');

        const managerQuestions = () => {
            inquirer.prompt([{
                type: 'input',
                name: 'managerName',
                message: "Please enter your manager's name",
                validate: (answer) => {
                    if (answer) {
                        return true;   
                    } else {
                        console.log( "Enter the manager's name")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's ID number?",
                validate: (answer) => {
                    const validAnswer = answer.match(/^[1-9]\d*$/);
                        if (validAnswer){
                            return true;
                        } else {
                
                           return 'Enter a number greater than zero.';
                        }
                }
            },

            {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter your manager's email",
                validate: (answer) => {
                    const validAnswer = answer.match(/\S+@\S+\.\S+/);
                    if(pass){
                        return true;
                    } else {
                        return 'Please enter a valid email';
                    };
                },
            },

            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "Please enter your manager's office number.",
                validate: (answer) => {
                    const validAnswer = answer.match(/^[1-9]\d*$/);
                    if (validAnswer){
                        return true;
                    } else {
                        return 'Please enter a valid office number.';
                    };
                },
            },

            ])
        }

}

    