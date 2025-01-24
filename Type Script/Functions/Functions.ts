// Functions
//  Function types
//  Optional and default parameters
//  Rest Parameters
//  Overloaded

// Basic Function
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

//  Function types
function userInfo(
    name: string,
    age: number,
    setPassword: (password: string) => void
) {
    setPassword("Bitcoin");
    console.log("Name: " + name + " Age: " + age);
}
userInfo("Bidhit", 22, (password: string) => {
    console.log("Password: " + password);
});

// Optional Parameters:
function greet1(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    return `Hello, ${name}!`;
}

console.log(greet1("Bidhit")); // Hello, Bidhit!
console.log(greet1("Bidhit", 22)); // Hello, Bidhit! You are 22 years old.

// Default Parameters:
function greet2(name: string, age: number = 30): string {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet2("Bidhit")); // Hello, Bidhit! You are 30 years old. Age is 30 by default
console.log(greet2("Bidhit", 25)); // Hello, Bidhit! You are 25 years old.

// Arrow Functions:
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(3, 4)); // 12

// Rest Parameters
//  ... this Rest/Spread --> Parameters/Operators --> Alag Alag jagah alag meaning hota hai

function friends(...args: string[]) {
    console.log(args[0]);
}
friends("friends1", "friends2", "friends3", "friends4", "friends5");

// Rest Parameters with Regular Parameters:
function greet3(greeting: string, ...names: string[]): string {
    return `${greeting}, ${names.join(" & ")}!`;
}
console.log(greet3("Hello", "Alice", "Bob", "Charlie")); // Hello, Alice & Bob & Charlie!

// Rest Parameters with Mixed Types:
function displayInfo(name: string, ...info: (string | number)[]): void {
    console.log(`Name: ${name}`);
    console.log("Info:", info.join(", "));
}
displayInfo("Alice", 25, "Developer", "New York");
// Name: Alice
// Info: 25, Developer, New York

// Rest Parameters with Destructuring:
function calculateSum(...nums: number[]): number {
    const [first, second] = nums;
    console.log(`First: ${first}, Second: ${second}`);
    return nums.reduce((acc, num) => acc + num, 0);
}
console.log(calculateSum(1, 2, 3, 4));
// First: 1, Second: 2
// Output: 10

//  Overloaded
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}
console.log(combine("Hello, ", "World!")); // Hello, World!
console.log(combine(5, 10)); // 15
