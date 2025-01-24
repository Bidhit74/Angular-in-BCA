// Getters and Setters

// With using get and set keyword
class UserBidhit {
    constructor(public name: string, public age: number) {}
    getName() {
        return this.name;
    }
    setName(value: string) {
        this.name = value;
    }
}
let u1 = new UserBidhit("Bidhit", 22);
u1.getName();
console.log(u1.getName());
u1.setName("Binit Kumar");
console.log(u1.getName());

// With using keyword get and set
class Person1 {
    private _age: number = 0; // Private property

    // Getter
    get age() {
        return this._age;
    }

    // Setter
    set age(value: number) {
        if (value > 0) {
            this._age = value;
        } else {
            console.error("Age must be a positive number!");
        }
    }
}

const person = new Person1();
person.age = 25; // Calls the setter
console.log(person.age); // Calls the getter, Output: 25

person.age = -5; // Error: Age must be a positive number!
