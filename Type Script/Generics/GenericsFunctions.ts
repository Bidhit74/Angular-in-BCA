// Generics Functions

// Key Features:
// Type Safety: Prevents errors by ensuring the correct type is used.
// Reusability: Can work with various types without rewriting the function.
// Flexibility: Type is determined at the time of the function call.
// Constraints: Limit the type with extends to ensure the type meets specific requirements.
function identity<T>(value: T): T {
    return value;
}
console.log(identity<number>(5)); // 5
console.log(identity<string>("Hello")); // Hello

// Generic Function with Multiple Types:
function combine<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}

console.log(combine<number, string>(1, "Alice")); // [1, "Alice"]
console.log(combine<boolean, number>(true, 42)); // [true, 42]

// Generic Constraints:
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}
console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3

// Generic Function with Arrays:
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
console.log(getFirstElement<number>([1, 2, 3])); // 1
console.log(getFirstElement<string>(["A", "B", "C"])); // "A"
