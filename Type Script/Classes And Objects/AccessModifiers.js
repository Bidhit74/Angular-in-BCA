// Access Modifiers in TypeScript:
// 1.	Public: Accessible from anywhere (default modifier).
// 2.	Private: Accessible only within the class where it's defined.
// 3.	Protected: Accessible within the class and its subclasses.
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
var Person = /** @class */ (function () {
    function Person(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    Person.prototype.getAge = function () {
        return this.age; // Private method
    };
    Person.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.getAge()));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, id) {
        return _super.call(this, name, age, id) || this;
    }
    Employee.prototype.showId = function () {
        console.log("Protected ID: ".concat(this.id)); // Accessing protected property
    };
    return Employee;
}(Person));
var emp = new Employee("John", 30, 101);
emp.displayInfo(); // Accessible
emp.showId(); // Accessible
// emp.age = 25; // Error: Private property | Yah change ho jata hai but yah code wrong hai
// emp.id = 105; // Error: Protected property
