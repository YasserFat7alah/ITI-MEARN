/* 2- Create SquaresModule.js that contains Rectangle and Square  
            Rectangle inherits form Shape and Square Inherits from rectangle 
            Rectangle class has two properties width and height with getArea function 
This function calling ShapeDraw function inside  */

import Shape from "./shapeModule.js";

export class Rectangle extends Shape {

    #width;
    #height;
    #area = 0;

    constructor(_color, _w, _h) {
        super(_color);
        this.Width = _w;
        this.Height = _h;
    }

    /* Width prop */
    set Width(_w) {
        (_w.constructor.name == 'Number')? this.#width = _w  : this.#width = 0;
    }

    get Width() {
        return this.#width;
    }

    /* Height Prop */
    set Height(_w) {
        (_w.constructor.name == 'Number')? this.#height = _w  : this.#height = 0;
    }

    get Height() {
        return this.#height;
    }

    /* Get Area function */

    getArea() {
        this.#area = this.Height * this.Width;
        this.DarwShape();
        console.log('area: ', this.#area);

        return this.#area;
    }

    DarwShape() {
        console.log(`color: ${this.Color} \n width: ${this.Width} \n height: ${this.Height} `);
    }


}


export class Square extends Rectangle {

    constructor(_color, _w) {
        super(_color, _w, _w);
    }

    set Height(_w) {
        if(_w.constructor.name == 'Number') this.Width = _w ;
    }

    get Height() {
        return this.Width;
    }

    DarwShape() {
        console.log(`color: ${this.Color} \n width: ${this.Width}  `);
    }

}