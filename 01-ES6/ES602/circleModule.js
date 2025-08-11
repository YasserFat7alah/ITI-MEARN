/*3- Create CircleModule.js that contains Circle class (inherits Shape) with radius 
,x and y With getArea function containing circle area and ShapeDraw 
function call.   */

import Shape from "./shapeModule.js";

export class Circle extends Shape {

    #radius;
    #x;
    #y;
    #area = 0;

    constructor(_color, _rad, _x, _y) {
        super(_color);
        this.Radius = _rad;
        this.X = _x;
        this.Y = _y;
    }

    /* radius prop */
    set Radius(_rad) {
        (_rad.constructor.name == 'Number')? this.#radius = _rad  : this.#radius = 0;
    }

    get Radius() {
        return this.#radius;
    }

    /* X prop */
    set X(_w) {
        (_w.constructor.name == 'Number')? this.#x = _w  : this.#x = 0;
    }

    get X() {
        return this.#x;
    }

    /* Y Prop */
    set Y(_w) {
        (_w.constructor.name == 'Number')? this.#y = _w  : this.#y = 0;
    }

    get Y() {
        return this.#y;
    }

    /* Get Area function */

    getArea() {
        this.#area = this.#radius * this.#radius * Math.PI;
        this.DarwShape();
        console.log('area: ', this.#area);

        return this.#area;
    }

    DarwShape() {
        console.log(`color: ${this.Color} \n radius: ${this.Radius} \n x: ${this.X} \n y: ${this.Y}`);
    }

}