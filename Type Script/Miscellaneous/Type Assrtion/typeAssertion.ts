// Type Assertions
// Type Coasting
// Non-null assertion operator

// There are two syntax forms for type assertions:

// 1. Angle-bracket syntax:
let value: any = "Hello";
let strLength: number = (<string>value).length;
console.log(strLength); // 5

// 2.As syntax:
let value1: any = "HelloBidhit";
let strLength1: number = (value1 as string).length;
console.log(strLength1); // 11

// Type Coasting
let value2 = Number("15"); // Type Casting in number
console.log(value2); // 15
console.log(typeof value2); // number

// Non-null assertion operator

let name1: string | null = "Bidhit";
console.log(name1!.length); // Safe, asserting name is not null
