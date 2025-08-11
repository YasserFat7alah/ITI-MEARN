/* 1- Create shapeModule.js file that contains Shape class with the following properties 
        a- Has one property (private) color(string)  using setter and getter Color. 
        b- Create DrawShape function that print color value 
 */

export default class Shape {
    #color;

    constructor(_color){
        this.#color = _color;
    }

    /* Properities */

    set Color(_color) {
        (_color.constructor.name == 'String')?  this.#color = _color.toLowerCase() : this.#color = 'black' ;
    }

    get Color() {
        return this.#color;
    }

    /* Methods */

    DarwShape() {
        console.log(this.Color);
    }

}
