// Type Aliases
// Used to create custom type names for simplifying complex types or unions.

type shankhya = number; // Alias for `number`
let sh: shankhya;
sh = 25;

type arg = string | number; // Alias for a union type

function getArg(obj: arg) {
    console.log(obj);
}
getArg("Bidhit"); // Valid input (string)
getArg(25); // Valid input (number)
// getArg(true);  // Error: Type 'boolean' is not assignable to type 'arg'

// Intersection Types (&)
// Combines multiple types into one, requiring all properties to be present.

type User1 = {
    name: string;
    email: string;
};

type Admin1 = User1 & {
    getDetails(user: string): void;
};

function abcd1(a: Admin1) {
    a.getDetails; // Admin-specific property
    a.name = "Bidhit"; // User property
    a.email = "bk@example"; // User property
}

// Same name type declaration not allowed in TypeScript
// type Abc1 = number;
// type Abc1 = string; // Error: Duplicate identifier 'Abc1'
