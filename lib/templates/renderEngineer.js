const fs = require('fs');
const path = require('path')

function generateEngineer (answers1,answers3) {
    const generateHTML = () =>
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


  <div class="engineer-card" style="width: 18rem;">
  <div class="card-header">
    ${answers1.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${answers1.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${answers1.email}">${answers1.email}</a></li>
    <li class="list-group-item">GitHub:${answers3.gitHub}</li>
  </ul>
</div> 
</body>
</html>`;
const htmlPageContent = generateHTML()
fs.writeFile('index.html', htmlPageContent, (err) =>
err ? console.log(err) : console.log('Successfully created index.html!')
);
}

module.exports = generateEngineer;