//* Procedural Method (Without OOP)
function calculateRectangleArea(length, width) {
    return length * width;
}

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

//* OOP Way
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class");
        }
    }

    calculateArea() {
        throw new Error("Method 'calculateArea' must be implemented in derived classes");
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        return this.length * this.width;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

console.log(rectangle.calculateArea()); // Output: 50
console.log(circle.calculateArea());    // Output: ~153.94 (approximate)

// In this example, Shape is an abstract class providing an abstraction for the concept of calculating area.
// Rectangle and Circle are concrete classes that inherit from Shape and implement the calculateArea method specific to their shapes.