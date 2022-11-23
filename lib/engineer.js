const Employee = require ('./employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }
}

function gitHub () {
    return this.gitHub;
}

function getRole () {
    return 'engineer';
}

module.exports =  Engineer;