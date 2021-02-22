const Employee = require('../src/Employee');
const FullTimeEmployee = require('../src/FullTimeEmployee');
const Intern = require('../src/Intern');

test('Testing the Instantiation of an Employee', () => {
    let employee = new Employee("Michelle", "123 Fake St");
    expect(employee.name).toBe("Michelle");
    expect(employee.address).toBe("123 Fake St");
});

test('Testing the setName and setAddress function of an Employee', () => {
    let employee = new Employee("Michelle", "123 Fake St");
    employee.setName("Alex");
    employee.setAddress("345 Fake Ave")
    expect(employee.name).toBe("Alex");
    expect(employee.address).toBe("345 Fake Ave");
});

test('Testing the getName and getAddress function of an Employee', () => {
    let employee = new Employee("Michelle", "123 Fake St");
    expect(employee.getName()).toBe("Michelle");
    expect(employee.getAddress()).toBe("123 Fake St");
});

test('Testing the getName and getAddress function of a FullTimeEmployee', () => {
    let ftEmployee = new FullTimeEmployee("Michelle", "123 Fake St", 30);
    expect(ftEmployee.getName()).toBe("Michelle");
    expect(ftEmployee.getAddress()).toBe("123 Fake St");
});

test('Testing the getSalary function of a FullTimeEmployee', () => {
    let ftEmployee = new FullTimeEmployee("Michelle", "123 Fake St", 30);
    expect(ftEmployee.getSalary()).toBe(64400);
});

test('Testing the getName and getAddress function of an Intern', () => {
    let intern = new Intern("Michelle", "123 Fake St");
    expect(intern.getName()).toBe("Michelle");
    expect(intern.getAddress()).toBe("123 Fake St");
});

test('Testing the getSalary function of an Intern', () => {
    let ftEmployee = new Intern("Michelle", "123 Fake St");
    expect(ftEmployee.getSalary()).toBe(18564);
});




