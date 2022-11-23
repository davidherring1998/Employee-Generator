const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const render = require("./lib/render");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const renderHTML = require('./lib/render');
const generateManager = require("./lib/render");


const team = [];
const createMember = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "welcome",
        message: `Welcome team member, press enter to continue.`,
      },
      {
        type: "input",
        name: "name",
        message: `What is your name?`,
      },
      {
        type: "input",
        name: "id",
        message: `What is your ID?`,
      },
      {
        type: "input",
        name: "email",
        message: `What is your email?`,
      },
      {
        type: "list",
        name: "roleType",
        message: `What is your role?`,
        choices: ['Manager', 'Engineer', 'Intern' ]
      },
    ])
    .then((answers1) => {
      if (answers1.roleType === 'Manager') {
        inquirer.prompt([
          {
            type: "input",
            name: "officeNum",
            message: "What is your office number?",
          },
        ]).then((answers2 => {
          const manager = new Manager(answers1.name, answers1.id, answers1.email, answers2.officeNum)
          team.push(manager);
        }))
      } else if (answers1.roleType === "Engineer") {
        inquirer.prompt([
          {
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?",
          },
        ]).then((answers3) => {
            const engineer = new Engineer(answers1.name, answers1.id, answers1.email, answers3.gitHub)
          team.push(engineer);
        }) 
      } else if (answers1.roleType === "Intern") {
        inquirer.prompt([
          {
            type: "input",
            name: "school",
            message: "What is your school's name?",
          },        
        ]).then((answers4) => {
          const intern = new Intern(answers1.name, answers1.id, answers1.email, answers4.school)
          team.push(intern);
        })
      } 
    }).then((answers1,answers2,answers3,answers4) => {
      console.log(manager)
    })
  }

createMember();
