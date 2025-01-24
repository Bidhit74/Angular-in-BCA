// Readonly Properties
// Optional Properties
// Parameter Properties
// 1. Readonly Property: Cannot be modified after initialization.
var User = /** @class */ (function () {
    function User(id) {
        this.id = id; // Can be set only in constructor
    }
    return User;
}());
var user = new User(101);
console.log(user.id); // 101
// user.id = 102; // Error: Cannot assign to 'id' because it is a readonly property.
// 2. Optional Property: Indicated with ?, it may or may not be provided.
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price; // Optional initialization
    }
    return Product;
}());
var prod1 = new Product("Laptop");
var prod2 = new Product("Phone", 500);
console.log(prod1.price); // undefined
console.log(prod2.price); // 500
// 3. Parameter Property: Allows declaring and initializing properties in the constructor directly using public, private, readonly, etc.
var Employee1 = /** @class */ (function () {
    function Employee1(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        // Properties are automatically initialized
    }
    Employee1.prototype.getDetails = function () {
        console.log("Name: ".concat(this.name, ", ID: ").concat(this.id));
    };
    return Employee1;
}());
var emp1 = new Employee1("Alice", 25, 123);
emp1.getDetails(); // Name: Alice, ID: 123
// emp.id = 456; // Error: Cannot assign to 'id' because it is a readonly property
