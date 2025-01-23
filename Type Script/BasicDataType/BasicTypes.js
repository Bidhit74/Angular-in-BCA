// Basic Types
// Primitive types (Number, Boolean, String)
// Non-primitive types (Array, Tuple, Enum)
// Other types - Any Unknown, Void, Null, Undefined, Never
// Number
var a = 5;
var b = 10;
// Boolean
var isDone = false; //  Strictly boolean values
var isDone1 = false; // boolean values
// String
var color = "blue";
// Array
var list = [1, 2, 3];
// Tuple
var x = ["hello", 10]; // Strictly enforce the order of the elements
// Enumeration - Enum is a way to give more friendly names to sets of numeric values.
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Guest"] = "guest";
    UserRole["SuperAdmin"] = "superadmin";
})(UserRole || (UserRole = {}));
UserRole.SuperAdmin;
// Any
var notSure = 4;
var notSure1; // By default it is any
// Unknown - It is a type-safe counterpart of any. When we don’t know the type of the value, we can use unknown.
var u;
u = 5;
u = "hello";
// u.toUpperCase(); // Error
if (typeof u === "string") {
    u.toUpperCase();
}
// Void - return nothing
function abc() {
    console.log("Hello world");
}
abc();
// Null
var n = null; // type is any
var n1; // type is null
// Undefined
var ud;
// Never
// function abcd():never {
//     while (true) { }
// }
// abcd();
// console.log("Hello");
