// Generics Functions
// Key Features:
// Type Safety: Prevents errors by ensuring the correct type is used.
// Reusability: Can work with various types without rewriting the function.
// Flexibility: Type is determined at the time of the function call.
// Constraints: Limit the type with extends to ensure the type meets specific requirements.
function identity(value) {
    return value;
}
console.log(identity(5)); // 5
console.log(identity("Hello")); // Hello
// Generic Function with Multiple Types:
function combine(a, b) {
    return [a, b];
}
console.log(combine(1, "Alice")); // [1, "Alice"]
console.log(combine(true, 42)); // [true, 42]
// Generic Constraints:
function getLength(item) {
    return item.length;
}
console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3
// Generic Function with Arrays:
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["A", "B", "C"])); // "A"
