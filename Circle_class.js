class Circle {
    radius;
    color;
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    getAre() {
        return this.radius * this.radius * Math.PI;
    }
}