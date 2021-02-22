class Employee{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getAddress(){
        return this.address;
    }

    setAddress(address){
        this.address = address;
    }

    getSalary(){
        return 0;
    }
}

module.exports = Employee;