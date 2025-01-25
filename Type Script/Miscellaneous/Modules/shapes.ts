// Combining Named and Default Exports:

export const circleArea = (radius: number): number => Math.PI * radius * radius;
export const squareArea = (side: number): number => side * side;
export default class Shape {
    constructor(public name: string) {}
}
