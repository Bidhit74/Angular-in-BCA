"use strict";
// Combining Named and Default Exports:
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareArea = exports.circleArea = void 0;
var circleArea = function (radius) { return Math.PI * radius * radius; };
exports.circleArea = circleArea;
var squareArea = function (side) { return side * side; };
exports.squareArea = squareArea;
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    return Shape;
}());
exports.default = Shape;
