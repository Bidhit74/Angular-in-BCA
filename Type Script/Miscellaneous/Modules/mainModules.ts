// Modules
//  Exporting and importing modules
//  Default exports

// import { add, subtract } from "./mathUtils"; // named imports

// console.log(add(20, 5)); // 25
// console.log(subtract(20, 5)); // 15

// import log from "./logger"; // Default import

// log("Hello Bidhit");

import Shape from "./shapes";
import { circleArea, squareArea } from "./shapes"; // named imports

const shape = new Shape("Area of Circle");
console.log(shape.name); // Area of Circle
console.log(circleArea(5)); // 78.53

const shape1 = new Shape("Area of Square");
console.log(shape1.name); // Area of Square
console.log(squareArea(5)); // 25

import { add, subtract, log } from "./utils"; // named imports
console.log(add(20, 5)); // 25
console.log(subtract(20, 5)); // 15
log("Hello Bidhit");
