const Employee = require("./Employee");

class FullTimeEmployee extends Employee{
    constructor(name, address, payRate) {
        super();
        this.hoursWorkedPerWeek = 40;
        this.payRate = payRate;
        this.yearlyBonus = 2000;
    }

    getSalary(){
        return (this.hoursWorkedPerWeek * this.payRate * 52) + this.yearlyBonus;
    }
}
module.exports = FullTimeEmployee;