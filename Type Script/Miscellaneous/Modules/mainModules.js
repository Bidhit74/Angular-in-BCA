"use strict";
// Modules
//  Exporting and importing modules
//  Default exports
Object.defineProperty(exports, "__esModule", { value: true });
// import { add, subtract } from "./mathUtils"; // named imports
// console.log(add(20, 5)); // 25
// console.log(subtract(20, 5)); // 15
// import log from "./logger"; // Default import
// log("Hello Bidhit");
var shapes_1 = require("./shapes");
var shapes_2 = require("./shapes"); // named imports
var shape = new shapes_1.default("Area of Circle");
console.log(shape.name); // Area of Circle
console.log((0, shapes_2.circleArea)(5)); // 78.53
var shape1 = new shapes_1.default("Area of Square");
console.log(shape1.name); // Area of Square
console.log((0, shapes_2.squareArea)(5)); // 25
var utils_1 = require("./utils"); // named imports
console.log((0, utils_1.add)(20, 5)); // 25
console.log((0, utils_1.subtract)(20, 5)); // 15
(0, utils_1.log)("Hello Bidhit");
