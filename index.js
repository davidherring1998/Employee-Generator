const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager.js')
const inquirer = require('inquirer');
const fs = require('fs');


// enter manager's info 
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: `What is your team manager's name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is your employee's ID?`
    }, 
    {
        type: 'input',
        name: 'email',
        message: `What is your employee's email?`
    },
    {
        type: 'input',
        name: 'officeNum',
        message: `What is your office number?`,
    }, 
])
.then((answers)=> {
    add()
})

function add () {inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: `What role would you like to add?`,
            choices: ['Engineer', 'Intern']
        }
    ])
    .then((answers) => {
        if(answers === 'Engineer'){
            addEngineer()
        } else {
            addIntern()
        }
    })
}

function addEngineer () {
    inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: `What is your new engineer's name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is your engineer's ID?`
    }, 
    {
        type: 'input',
        name: 'email',
        message: `What is your engineer's email?`
    },
    {
        type: 'input',
        name: 'gitHub',
        message: `What is your engineers GitHub url?`,
    }, 
])
}

function addIntern () {
    inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: `What is your intern name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is your intern's ID?`
    }, 
    {
        type: 'input',
        name: 'email',
        message: `What is your intern's email?`
    },
    {
        type: 'input',
        name: 'officeNum',
        message: `What is your intern's school name?`,
    }, 
])
}