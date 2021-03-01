[![Coverage Status](https://coveralls.io/repos/github/mpn6/IS219-JSOOPPrinciples/badge.svg?branch=master)](https://coveralls.io/github/mpn6/IS219-JSOOPPrinciples?branch=master)
[![Build Status](https://travis-ci.com/mpn6/IS219-JSOOPPrinciples.svg?branch=master)](https://travis-ci.com/mpn6/IS219-JSOOPPrinciples)

# Michelle Nunez

# OOP Design Patterns

### Creational Pattern - Singleton

The Singleton design pattern lets you ensure that a class has only one instance, while providing a global access point to this instance. 

All implementations of the Singleton have these two steps in common:

1. Make the default constructor private, to prevent other objects from using the ```new``` operator with the Singleton class.

2. Create a static creation method that acts as a constructor. This method calls the private constructor to create an object and saves it in a static field. 

An example of this is found in the [City](https://github.com/mpn6/CSVReader/blob/master/src/Models/City.js) model class of the CSV Reader homework:

```
module.exports = class City {
    constructor(data = null) {
        if(data) {
            this.id = data.id;
            this.city = data.city;
            this.city_ascii = data.city_ascii;
            this.lat = data.lat;
            this.lng = data.lng;
            this.iso2 = data.iso2;
            this.iso3 = data.iso3;
            this.capital = data.capital;
            this.admin_name = data.admin_name;
        }

    }
    static create(data) {
        return new City(data);
    }
}
```

The constructor of the City class is private and does not return a new object so other objects cannot use the ```new``` operator. This ensures that the class only has one instance. It also has a static creation method that acts a constructor, providing the global access point to this instance.

Another example of the Singleton with the City example:
```
var City = (function () {
    var instance;
 
    function createInstance() {
        var city = new City("I am the instance");
        return city;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
```


### Structural Pattern - Facade

A facade is a class that provides a simple interface to a complex subsystem. It includes **only** those features that clients really care about. 

An example of a facade can be found in the CSV Reader homework. One can use the complex [ReadCSV](https://github.com/mpn6/CSVReader/blob/master/src/ReadCSV.js) class to access the features that clients really care about: creating a ReadCSV object and getting the records of a file given a model.

```
    let readCSV = ReadCSV.create();
    let filename  = 'data/grades.csv';
    let records = ReadCSV.getRecords(filename, Grade);
```

### Behavioral Pattern - Strategy
The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called strategies.

The original class, called context, must have a field for storing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own.

An example of strategy can be seen in my [Calculate.js](https://github.com/mpn6/CSVReader/blob/master/src/Calculate.js) file:

```
// This strategy interface declares operations common to all
// supported versions of some algorithm. The context uses this
// interface to call the algorithm defined by the concrete
// strategies.

class calculate {
    calculate(){}
}

// This concrete strategies implement the algorithm while following
// the base strategy interface. The interface makes them
// interchangeable in the context.
class Add extends calculate{
    constructor() {
        super();
    }

    calculate(a,b){
        return a+b;
    }
}

class Subtract extends calculate{
    constructor() {
        super();
    }

    calculate(a,b){
        return a-b;
    }
}

// The context defines the interface of interest to clients.
class Context {
    calculations = new calculate();

    // Usually the context accepts a strategy through the
    // constructor, and also provides a setter so that the
    // strategy can be switched at runtime.
    
    setCalculations(calculations){
        this.calculations = calculations;
    }

    // The context delegates some work to the strategy object
    // instead of implementing multiple versions of the
    // algorithm on its own.
    
    calculate(a,b){
        return this.calculations.calculate(a,b);
    }
}

// The client code picks a concrete strategy and passes it to
// the context. The client should be aware of the differences
// between strategies in order to make the right choice.

class Calculate{
     static calculate(a, b, operation){
        let context = new Context();
        this.a = a;
        this.b = b;
        this.operation = operation;

        if (this.operation === "add"){
            context.setCalculations(new Add());
        }

        if (this.operation === "subtract"){
            context.setCalculations(new Subtract());
        }

        let result = context.calculate(a,b);
        return result;
    }
}

module.exports = Calculate;
```


# <strong>Explaining OOP principles using JavaScript</strong>

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

> An example of single responsibility can be seen through the getName() function in [Employee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Employee.js). The sole purpose of the function is to return the employee's name. It does nothing more and nothing less.

```
class Employee{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    getName(){
        return this.name;
    }
```

<strong>2. O - Open-Closed Principle</strong>

The open-closed principle states that your code should be open to extension, but closed for modification. This means that if someone wanted to use your code, they should be free to extend your code without having to go back and edit your code. 

> This can be seen in the Calculator class of my [Calculator.js](https://github.com/mpn6/is219calculator/blob/master/src/Calculator.js) file in my is219calculator repository. By adding this addCalculation method, we can add new calculations to the list of Calculations anywhere in our code without having to open our Calculator.js file again.

```
static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
```

<strong>3. L - Liskov Substitution Principle</strong>

The Liskov substitution principle states that objects of a superclass should be able to be replaced with objects of its subclasses without breaking the application.

> This principle can be seen through my child classes [FullTimeEmployee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/FullTimeEmployee.js) and [Intern.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Intern.js) of the parent class [Employee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Employee.js). The children have a common method from the parent Employee class but implement that method in different ways without breaking the application.

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

<strong>4. I - Interface Segregation Principle</strong>

The interface segregation principle states that you should not make very large interfaces. You should only make the essential modules required and the rest optional. 

> JavaScript doesn't have interfaces but we can achieve the same purpose by exporting a class or method. For example, I exported my Employee class in [Employee.js](https://github.com/mpn6/IS219-JSOOPPrinciples/blob/master/src/Employee.js) so that other classes can inherit it.

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

<strong>5. D - Dependency Inversion Principle</strong>

The dependency inversion principle states that you should hand over control from the function itself to the caller of the function. This is done by defining who controls the type of parameters the function receives. High-level modules should not depends on low-level modules, but on abstractions.

> To implement this principle, your classes should be structured in the following way
```
class LowLevel1 {
}
class LowLevel2 {
}
class LowLevel3 {
}
class Abstraction {
    constructor() {
        this.a = new LowLevel1();
        this.b = new LowLevel2();
        this.c = new LowLevel3();
    }
}
class HighLevel {
    constructor() {
        this.abstraction = new Abstraction();
    }
}
```
