// Readonly Properties
// Optional Properties
// Parameter Properties

// 1. Readonly Property: Cannot be modified after initialization.
class User {
    readonly id: number; // Readonly property

    constructor(id: number) {
        this.id = id; // Can be set only in constructor
    }
}

const user = new User(101);
console.log(user.id); // 101
// user.id = 102; // Error: Cannot assign to 'id' because it is a readonly property.

// 2. Optional Property: Indicated with ?, it may or may not be provided.

class Product {
    name: string;
    price?: number; // Optional property

    constructor(name: string, price?: number) {
        this.name = name;
        this.price = price; // Optional initialization
    }
}

const prod1 = new Product("Laptop");
const prod2 = new Product("Phone", 500);
console.log(prod1.price); // undefined
console.log(prod2.price); // 500

// 3. Parameter Property: Allows declaring and initializing properties in the constructor directly using public, private, readonly, etc.
class Employee1 {
    constructor(public name: string, private age: number, readonly id: number) {
        // Properties are automatically initialized
    }

    getDetails() {
        console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
}

const emp1 = new Employee1("Alice", 25, 123);
emp1.getDetails(); // Name: Alice, ID: 123
// emp.id = 456; // Error: Cannot assign to 'id' because it is a readonly property
