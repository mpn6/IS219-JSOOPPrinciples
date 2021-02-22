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
    employee.getName();
    employee.getAddress();
    expect(employee.name).toBe("Michelle");
    expect(employee.name).toBe("123 Fake St");
});

test('Testing the getName and getAddress function of a FullTimeEmployee', () => {
    let ftEmployee = new FullTimeEmployee("Michelle", "123 Fake St", 30);
    ftEmployee.getName();
    ftEmployee.getAddress();
    expect(ftEmployee.name).toBe("Michelle");
    expect(ftEmployee.name).toBe("123 Fake St");
});

test('Testing the getSalary function of a FullTimeEmployee', () => {
    let ftEmployee = new FullTimeEmployee("Michelle", "123 Fake St", 30);
    expect(ftEmployee.getSalary()).toBe(64400);
});

test('Testing the getName and getAddress function of an Intern', () => {
    let intern = new Intern("Michelle", "123 Fake St");
    intern.getName();
    intern.getAddress();
    expect(intern.name).toBe("Michelle");
    expect(intern.name).toBe("123 Fake St");
});

test('Testing the getSalary function of an Intern', () => {
    let ftEmployee = new Intern("Michelle", "123 Fake St");
    expect(ftEmployee.getSalary()).toBe(357);
});




