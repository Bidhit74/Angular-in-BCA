// Type Assertions
// Type Coasting
// Non-null assertion operator
// There are two syntax forms for type assertions:
// 1. Angle-bracket syntax:
var value = "Hello";
var strLength = value.length;
console.log(strLength); // 5
// 2.As syntax:
var value1 = "HelloBidhit";
var strLength1 = value1.length;
console.log(strLength1); // 11
// Type Coasting
var value2 = Number("15"); // Type Casting in number
console.log(value2); // 15
console.log(typeof value2); // number
// Non-null assertion operator
var name1 = "Bidhit";
console.log(name1.length); // Safe, asserting name is not null
