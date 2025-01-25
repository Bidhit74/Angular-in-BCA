var obj = { key: "Age", value: 25 };
console.log(obj); // { key: "Age", value: 25 }
var StringProcessor = /** @class */ (function () {
    function StringProcessor() {
    }
    StringProcessor.prototype.process = function (item) {
        return item.toUpperCase();
    };
    return StringProcessor;
}());
var processor = new StringProcessor();
console.log(processor.process("hello")); // HELLO
var pair1 = { key1: "Age", value1: 25 };
console.log(pair1.key1); // Age
console.log(pair1.value1); // 25
var add = function (a, b) { return a + b; };
var concatenate = function (a, b) { return a + b; };
console.log(add(10, 20)); // 30
console.log(concatenate("Hello, ", "World!")); // Hello, World!
var defaultContainer = { content: "Default Type" };
var numberContainer = { content: 42 };
console.log(defaultContainer.content); // Default Type
console.log(numberContainer.content); // 42
