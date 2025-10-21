class Bike{
    constructor(brandName,type){
        this.brandName=brandName;
        this.type=type;
    }
}

var bikeProperties={
    // setBikeColor:function(color){
    //     this.color=color
    // }
    setBikeColor(color){
        this.color=color
    },
    getBikeInfo(){
        console.log(`Brand Name ${this.brandName} , Type ${this.type} , Color ${this.color}`);
        
    }
}

Object.assign(Bike.prototype,bikeProperties);
var bike1=new Bike("Brand1","Dual");
bike1.setBikeColor("red");
bike1.getBikeInfo();