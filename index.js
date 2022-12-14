const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");

function managerQuestions() {
  inquirer
    .prompt({
      type: "list",
      name: "introduction",
      message: "Would you like to begin building your team?",
      choices: ["Yes", "No"],
    })
    .then((ans) => {
      if (ans.introduction === "Yes") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "welcome",
              message: `Let's create your team manager!`,
            },
            {
              type: "input",
              name: "name1",
              message: `What is your team manager's name?`,
            },
            {
              type: "input",
              name: "id1",
              message: `What is your team manager' id?`,
            },
            {
              type: "input",
              name: "email1",
              message: `What is your team manager's email?`,
            },
            {
              type: "input",
              name: "officeNum",
              message: `What is your team manager's office number?`,
            },
          ])
          .then((answers1) => {
            const manager = new Manager(
              answers1.name1,
              answers1.id1,
              answers1.email1,
              answers1.officeNum
            );
            if (answers1.officeNum) {
              inquirer
                .prompt([
                  {
                    type: "input",
                    name: "welcome2",
                    message: `Let's create your team's engineer!`,
                  },
                  {
                    type: "input",
                    name: "name2",
                    message: `What is your team engineer's name?`,
                  },
                  {
                    type: "input",
                    name: "id2",
                    message: `What is your team engineer's id?`,
                  },
                  {
                    type: "input",
                    name: "email2",
                    message: `What is your team engineer's email?`,
                  },
                  {
                    type: "input",
                    name: "gitHub",
                    message: `What is your team engineer's GitHub username?`,
                  },
                ])
                .then((answers2) => {
                  const engineer = new Engineer(
                    answers2.name2,
                    answers2.id2,
                    answers2.email2,
                    answers2.gitHub
                  );
                  if (answers2.gitHub) {
                    inquirer
                      .prompt([
                        {
                          type: "input",
                          name: "welcome3",
                          message: `Let's create your team's intern!`,
                        },
                        {
                          type: "input",
                          name: "name3",
                          message: `What is your team intern's name?`,
                        },
                        {
                          type: "input",
                          name: "id3",
                          message: `What is your team intern's id?`,
                        },
                        {
                          type: "input",
                          name: "email3",
                          message: `What is your team intern's email?`,
                        },
                        {
                          type: "input",
                          name: "school",
                          message: `What is your team intern's school?`,
                        },
                      ])
                      .then((answers3) => {
                        const intern = new Intern(
                          answers3.name3,
                          answers3.id3,
                          answers3.email3,
                          answers3.school
                        );
                        buildTeam(manager, engineer, intern);
                      });
                  }
                });
            }
          });
      }
    });
}

managerQuestions();

function buildTeam(manager, engineer, intern) {
  const generateHTML = ({}) =>
    `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <title>Employee Information</title>
      </head>
      <body>
          <!-- header -->
            <header style="text-align: center; background-color:aqua;padding:2%;margin: .5%; font-size: 32px; color: red;">My Team</header>
          <!-- body cards -->
          <div class="card" style="width: 98%; border: solid 5px red; margin: 10px;">
              <div class="card-header">
                ${manager.name}
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Manager</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">ID:${manager.id}</li>
                <li class="list-group-item">Office number:${manager.officeNum}</li>
              </ul>
            </div>

            <div class="card" style="width: 98%; border: solid 5px red; margin: 10px;">
            <div class="card-header">
              ${engineer.name}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Engineer</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li class="list-group-item">ID:${engineer.id}</li>
              <li class="list-group-item">GitHub link: <a href="https://github.com/${engineer.github}" target="_blank">Click</a></li>
            </ul>
          </div>

          <div class="card" style="width: 98%; border: solid 5px red; margin: 10px;">
          <div class="card-header">
            ${intern.name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Intern</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">ID:${intern.id}</li>
            <li class="list-group-item">School:${intern.school}</li>
          </ul>
        </div>
      </body>
      </html>`;
  const htmlPageContent = generateHTML(manager, engineer, intern);
  fs.writeFile("index.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}
