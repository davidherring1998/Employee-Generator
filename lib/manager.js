const Employee = require('Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNum){
        super(id, name, email);
        this.officeNum = officeNum;
    }
}


function school () {
    return this.school;
}

function getRole () {
    return 'manager'
}

module.export = Manager;