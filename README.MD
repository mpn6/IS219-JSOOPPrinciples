[![Coverage Status](https://coveralls.io/repos/github/mpn6/IS219-JSOOPPrinciples/badge.svg?branch=master)](https://coveralls.io/github/mpn6/IS219-JSOOPPrinciples?branch=master)
[![Build Status](https://travis-ci.com/mpn6/IS219-JSOOPPrinciples.svg?branch=main)](https://travis-ci.com/mpn6/IS219-JSOOPPrinciples)

# <strong>Michelle Nunez - Explaining OOP principles using JavaScript</strong>

## <strong>The Four Principles of Object-Oriented Programming</strong>

<strong>1. Encapsulation</strong>

Encapsulation happens when each object manages its own state via methods. These methods are public functions which allow other classes and objects to communicate with it but by default cannot directly change the object's state.

> An example of this is in my [Employee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Employee.js) file. This class creates an Employee object that has a name state and an address state. The only way for other objects or classes to interact or update these states is by calling on the public methods setName and setAddress.

```
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
```

<strong>2. Inheritance</strong>

Inheritance derives a child class that inherits all the methods and fields of a parent class. The child class is able to use all the methods and functions of the parent class without having to re-write the code and can implement its own functions. 

> An example of inheritance are my child classes [FullTimeEmployee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/FullTimeEmployee.js) and [Intern.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Intern.js) of the parent class [Employee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Employee.js). The child classes inherit employee's name and address states as well as the setName, getName, setAddress, and getAddress methods. They can use these methods without having to re-write the code in their own classes. This is done by using **extends Employee** and using super() in the constructor.

```
const Employee = require("./Employee");

class FullTimeEmployee extends Employee{
    constructor(name, address, payRate) {
        super(name, address);
        this.hoursWorkedPerWeek = 40;
        this.payRate = payRate;
        this.yearlyBonus = 2000;
    }
    getSalary(){
        return (this.hoursWorkedPerWeek * this.payRate * 52) + this.yearlyBonus;
    }
}
module.exports = FullTimeEmployee;
```

<strong>3. Polymorphism</strong>

Polymorphism allows you to treat different objects as if they were the same type of object. Polymorphism is used by by defining a (parent) interface to be reused which outlines common methods. Then, each child class implements its own version of these methods.

> An example of polymorphism can be seen through my child classes [FullTimeEmployee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/FullTimeEmployee.js) and [Intern.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Intern.js) of the parent class [Employee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Employee.js). The children have the common method of getSalary() from the parent Employee class but implement that method in different ways.

> The getSalary() method in the Intern class:
```
getSalary(){
        return (this.hoursWorkedPerWeek * this.payRate * 52);
    }
```
> The getSalary() method in the FullTimeEmployee class:
```
getSalary(){
        return (this.hoursWorkedPerWeek * this.payRate * 52) + this.yearlyBonus;
    }
```

<strong>4. Abstraction</strong>

Abstraction is meant to handle complexity by hiding unnnecessary details from the user. Each object only exposes a high-level way for using it. In other words, objects hide internal implementation details and only show operations relevant for the other objects.

> An example of abstraction can be seen in [Employee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Employee.js). The getSalary() function is as high-level as it gets so that other classes who use this parent class can implement it in their own ways. The class only shows the operations relevant to other classes.

## <strong>The 5 SOLID JavaScript Principles</strong>

<strong>1. S - Single Responsibility Principle</strong>

The single responsibility principle states that each function you code should only do one thing. If you want to implement different tasks, you should make different functions for each task.

<strong>2. O - Open-Closed Principle</strong>

The open-closed principle states that your code should be open to extension, but closed for modification. This means that if someone wanted to use your code, they should be free to extend your code without having to go back and edit your code. 

<strong>3. L - Liskov Substitution Principle</strong>

The Liskov substitution principle states that objects of a superclass should be able to be replaced with objects of its subclasses without breaking the application.

<strong>4. I - Interface Segregation Principle</strong>

The interface segregation principle states that you should not make very large interfaces. You should only make the essential modules required and the rest optional.

<strong>5. D - Dependency Inversion Principle</strong>

The dependency inversion principle states that you should hand over control from the function itself to the caller of the function. This is done by defining who controls the type of parameters the function receives.
