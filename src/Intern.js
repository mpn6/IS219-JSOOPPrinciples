const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, address) {
        super(name, address);
        this.hoursWorkedPerWeek = 21;
        this.payRate = 17.00;
    }

    getSalary(){
        return (this.hoursWorkedPerWeek * this.payRate * 52);
    }
}

module.exports = Intern;