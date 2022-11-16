class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

function getId () {
    return this.id;
}

function getName () {
    return this.name;
}

function getEmail () {
    return this.email;
}

function getRol () {
    return "employee";
}

module.exports = Employee;