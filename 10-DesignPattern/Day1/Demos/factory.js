class shape {
    draw() {

    }
}
class Rectangle extends shape {
    draw() {
        console.log("rectangle drawn");

    }
}
class Circle extends shape {
    draw() {
        console.log("circle drawn");

    }
}
class shapeFactory {
    constructor(type) {
        this.type = type;
    }
    createShape() {
        switch (this.type) {
            case "circle":
                return new Circle();
            case "rectangle":
                return new Rectangle()
        }

    }
}
var shape1=new shapeFactory("circle");
// console.log(shape1);
shape1.createShape().draw();

var shape2=new shapeFactory("rectangle");
shape2.createShape().draw();

// var rect=new Rectangle();
// rect.draw();
// var cir=new Circle();
// cir.draw();