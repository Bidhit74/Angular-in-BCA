var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Static Members
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b; // Static method
    };
    Calculator.multiply = function (a, b) {
        return a * b; // Static method
    };
    Calculator.pi = 3.14; // Static property
    return Calculator;
}());
// Accessing static members using the class name
console.log(Calculator.pi); // 3.14
console.log(Calculator.add(5, 10)); // 15
console.log(Calculator.multiply(4, 6)); // 24
// Cannot access static members via an instance
var calc = new Calculator();
// console.log(calc.pi); // Error: Property 'pi' does not exist on type 'Calculator'.
// Abstract Classes and methods
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving around..."); // Concrete method (optional for derived classes)
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark!"); // Implementing the abstract method
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("Meow!"); // Implementing the abstract method
    };
    return Cat;
}(Animal));
// Usage
var dog = new Dog();
dog.makeSound(); // Bark!
dog.move(); // Moving around...
var cat = new Cat();
cat.makeSound(); // Meow!
cat.move(); // Moving around...
// const animal = new Animal(); // Error: Cannot instantiate an abstract class
