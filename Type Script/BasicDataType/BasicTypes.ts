// Basic Types
// Primitive types (Number, Boolean, String)
// Non-primitive types (Array, Tuple, Enum)
// Other types - Any Unknown, Void, Null, Undefined, Never

// Number
let a = 5;
let b: number = 10;
// Boolean
let isDone: boolean = false; //  Strictly boolean values
let isDone1 = false; // boolean values
// String
let color: string = "blue";
// Array
let list: number[] = [1, 2, 3];

// Tuple
let x: [string, number] = ["hello", 10]; // Strictly enforce the order of the elements

// Enumeration - Enum is a way to give more friendly names to sets of numeric values.
enum UserRole {
    Admin = "admin",
    Guest = "guest",
    SuperAdmin = "superadmin",
}
UserRole.SuperAdmin;

// Any
let notSure: any = 4;
let notSure1; // By default it is any

// Unknown - It is a type-safe counterpart of any. When we don’t know the type of the value, we can use unknown.

let u: unknown;
u = 5;
u = "hello";
// u.toUpperCase(); // Error
if (typeof u === "string") {
    u.toUpperCase();
}

// Void - return nothing
function abc(): void {
    console.log("Hello world");
}
abc();
// Null
let n = null; // type is any
let n1: null; // type is null

// Undefined
let ud: undefined;

// Never
// function abcd():never {
//     while (true) { }
// }
// abcd();
// console.log("Hello");
