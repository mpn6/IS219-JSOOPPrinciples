

# <strong>Michelle Nunez - Explaining OOP principles using JavaScript</strong>

## <strong>The Four Principles of Object-Oriented Programming</strong>

<strong>1. Encapsulation</strong>

Encapsulation happens when each object manages its own state via methods. These methods are public functions which allow other classes and objects to communicate with it but by default cannot change the object's state.

<strong>2. Abstraction</strong>

Abstraction is meant to handle complexity by hiding unnnecessary details from the user. Each object only exposes a high-level way for using it. In other words, objects hide internal implementation details and only show operations relevant for the other objects.

<strong>3. Inheritance</strong>

Inheritance derives a child class that inherits all the methods and fields of a parent class. The child class is able to use all the methods and functions of the parent class without having to re-write the code and can implement its own functions. 

<strong>4. Polymorphism</strong>

Polymorphism allows you to treat different objects as if they were the same type of object. Polymorphism is used by by defining a (parent) interface to be reused which outlines common methods. Then, each child class implements its own version of these methods.

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
