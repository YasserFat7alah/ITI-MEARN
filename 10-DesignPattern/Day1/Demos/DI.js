class wheel {
    constructor(count) {
        this.count = count;
    }
}
class Engine {
    constructor(speed) {
        this.speed = speed;
    }
}


class Car{
    constructor(w,e){
        this.wheel1=w;
        this.engine=e;
    }
}
// var wheelVar=new wheel(4,"black");
var wheelVar=new wheel(4);
var engineVar=new Engine(1000);
var car1=new Car(wheelVar,engineVar);
console.log(car1);
