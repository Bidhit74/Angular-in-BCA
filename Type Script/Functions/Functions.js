// Functions
//  Function types
//  Optional and default parameters
//  Rest Parameters
//  Overloaded
// Basic Function
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Alice")); // Hello, Alice!
//  Function types
function userInfo(name, age, setPassword) {
    setPassword("Bitcoin");
    console.log("Name: " + name + " Age: " + age);
}
userInfo("Bidhit", 22, function (password) {
    console.log("Password: " + password);
});
// Optional Parameters:
function greet1(name, age) {
    if (age) {
        return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    }
    return "Hello, ".concat(name, "!");
}
console.log(greet1("Bidhit")); // Hello, Bidhit!
console.log(greet1("Bidhit", 22)); // Hello, Bidhit! You are 22 years old.
// Default Parameters:
function greet2(name, age) {
    if (age === void 0) { age = 30; }
    return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
}
console.log(greet2("Bidhit")); // Hello, Bidhit! You are 30 years old. Age is 30 by default
console.log(greet2("Bidhit", 25)); // Hello, Bidhit! You are 25 years old.
// Arrow Functions:
var multiply = function (a, b) { return a * b; };
console.log(multiply(3, 4)); // 12
// Rest Parameters
//  ... this Rest/Spread --> Parameters/Operators --> Alag Alag jagah alag meaning hota hai
function friends() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args[0]);
}
friends("friends1", "friends2", "friends3", "friends4", "friends5");
// Rest Parameters with Regular Parameters:
function greet3(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(greeting, ", ").concat(names.join(" & "), "!");
}
console.log(greet3("Hello", "Alice", "Bob", "Charlie")); // Hello, Alice & Bob & Charlie!
// Rest Parameters with Mixed Types:
function displayInfo(name) {
    var info = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        info[_i - 1] = arguments[_i];
    }
    console.log("Name: ".concat(name));
    console.log("Info:", info.join(", "));
}
displayInfo("Alice", 25, "Developer", "New York");
// Name: Alice
// Info: 25, Developer, New York
// Rest Parameters with Destructuring:
function calculateSum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var first = nums[0], second = nums[1];
    console.log("First: ".concat(first, ", Second: ").concat(second));
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(calculateSum(1, 2, 3, 4));
function combine(a, b) {
    return a + b;
}
console.log(combine("Hello, ", "World!")); // Hello, World!
console.log(combine(5, 10)); // 15
