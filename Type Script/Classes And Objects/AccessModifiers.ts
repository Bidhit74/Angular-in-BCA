// Access Modifiers in TypeScript:
// 1.	Public: Accessible from anywhere (default modifier).
// 2.	Private: Accessible only within the class where it's defined.
// 3.	Protected: Accessible within the class and its subclasses.

class Person {
    public name: string; // Accessible anywhere
    private age: number; // Accessible only within this class
    protected id: number; // Accessible within this class and subclasses

    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    private getAge() {
        return this.age; // Private method
    }

    public displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.getAge()}`);
    }
}

class Employee extends Person {
    constructor(name: string, age: number, id: number) {
        super(name, age, id);
    }

    showId() {
        console.log(`Protected ID: ${this.id}`); // Accessing protected property
    }
}

const emp = new Employee("John", 30, 101);
emp.displayInfo(); // Accessible
emp.showId(); // Accessible
// emp.age = 25; // Error: Private property | Yah change ho jata hai but yah code wrong hai
// emp.id = 105; // Error: Protected property
