// hard coded
class wheel {
    constructor(count,color) {
        this.count = count;
        this.color=color;
    }
}
class Engine {
    constructor(speed) {
        this.speed = speed;
    }
}


class Car{
    constructor(c,s,color1){
        this.wheel1=new wheel(c,color1);
        this.engine=new Engine(s)
    }
}