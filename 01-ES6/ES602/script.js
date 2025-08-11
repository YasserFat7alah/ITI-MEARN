/* 4- Create number of shapes and calling getArea function for each inside base.js Module  */

import { Rectangle, Square } from './squareModule.js'; // color, width, height
import { Circle } from './circleModule.js'; // color, radius, x , y



let circle = new Circle('red', 13, 250, 10);
console.log('===== Circle ======');
console.log('drawshape ======');
circle.DarwShape();
console.log('getarea ======');
circle.getArea();
console.log('===========');


let square = new Square('white', 120);
console.log('===== Square ======');
console.log('drawshape ======');
square.DarwShape();
console.log('getarea ======');
square.getArea();
console.log('===========');

let rectangle = new Rectangle('green', 100, 250);
console.log('===== Rectangle ======');
console.log('drawshape ======');
rectangle.DarwShape();
console.log('getarea ======');
rectangle.getArea();
console.log('===========');


