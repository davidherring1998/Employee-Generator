const Employee = require('./employee');

class Intern extends Employee {
    constructor(id, name, email, school){
    super(id, name, email);
    this.school = school;
    }
}

function school () {
    return this.school;
}

function getRole () {
    return 'intern';
}

module.export = Intern; 