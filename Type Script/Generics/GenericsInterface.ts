// Generics Interface
interface KeyValue<K, V> {
    key: K;
    value: V;
}
const obj: KeyValue<string, number> = { key: "Age", value: 25 };
console.log(obj); // { key: "Age", value: 25 }

// Generic Interface with Methods:
interface Processor<T> {
    process(item: T): T;
}

class StringProcessor implements Processor<string> {
    process(item: string): string {
        return item.toUpperCase();
    }
}

const processor = new StringProcessor();
console.log(processor.process("hello")); // HELLO

// Generic Interface with Multiple Types:
interface Pair1<T, U> {
    key1: T;
    value1: U;
}

const pair1: Pair1<string, number> = { key1: "Age", value1: 25 };
console.log(pair1.key1); // Age
console.log(pair1.value1); // 25

// Generic Interface for Functions:
interface Calculator1<T> {
    (a: T, b: T): T;
}

const add: Calculator1<number> = (a, b) => a + b;
const concatenate: Calculator1<string> = (a, b) => a + b;

console.log(add(10, 20)); // 30
console.log(concatenate("Hello, ", "World!")); // Hello, World!

// Generic Interface with Default Type:

interface Container<T = string> {
    content: T;
}
const defaultContainer: Container = { content: "Default Type" };
const numberContainer: Container<number> = { content: 42 };
console.log(defaultContainer.content); // Default Type
console.log(numberContainer.content); // 42
