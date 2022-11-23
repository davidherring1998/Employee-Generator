const Employee = require('./employee');

class Manager extends Employee {
    constructor(id, name, email, officeNum){
        super(id, name, email);
        this.officeNum = officeNum;
    }
}



function getOfficeNum () {
    return this.officeNum;
}

function getRole () {
    return 'manager';
}

// const pear = new Employee(12, 'brooke', 'email' );
// console.log(pear);

// const apple = new Manager('david', 001, 'email', 0001);
// console.log(apple)


module.exports = Manager;