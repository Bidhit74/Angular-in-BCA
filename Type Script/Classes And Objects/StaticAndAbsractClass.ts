// Static Members
class Calculator {
    static pi: number = 3.14; // Static property

    static add(a: number, b: number): number {
        return a + b; // Static method
    }

    static multiply(a: number, b: number): number {
        return a * b; // Static method
    }
}

// Accessing static members using the class name
console.log(Calculator.pi); // 3.14
console.log(Calculator.add(5, 10)); // 15
console.log(Calculator.multiply(4, 6)); // 24

// Cannot access static members via an instance
const calc = new Calculator();
// console.log(calc.pi); // Error: Property 'pi' does not exist on type 'Calculator'.

// Abstract Classes and methods
abstract class Animal {
    abstract makeSound(): void; // Abstract method (must be implemented in derived classes)

    move(): void {
        console.log("Moving around..."); // Concrete method (optional for derived classes)
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark!"); // Implementing the abstract method
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!"); // Implementing the abstract method
    }
}

// Usage
const dog = new Dog();
dog.makeSound(); // Bark!
dog.move(); // Moving around...

const cat = new Cat();
cat.makeSound(); // Meow!
cat.move(); // Moving around...

// const animal = new Animal(); // Error: Cannot instantiate an abstract class
