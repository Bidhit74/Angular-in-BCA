// Literal Types
//  String Literal Types
//  Numeric Literal Types
//  Boolean Literal Types

//  String Literal Types
let status1: "active" | "inactive";
status1 = "active"; // Valid
// status1 = "pending"; // Error: Type '"pending"' is not assignable to type '"active" | "inactive"'.

// Number Literal Type:
let code: 404 | 200;
code = 200; // Valid
// code = 500;  // Error: Type '500' is not assignable to type '404 | 200'.

// Boolean Literal Type:

let isComplete: true | false;
isComplete = true; // Valid
// isComplete = undefined;  // Error: Type 'undefined' is not assignable to type 'true | false'.
