class CartSubsystem{
    OperationA(){
        console.log("Subsystem A Operation");
        
    }
}
class PayementSubSystem{
     OperationB(){
        console.log("Subsystem B Operation");
        
    }
}
class TrackOrderSubSystem{
    OperationC(){
        console.log("Subsystem C Operation");

    }
}

class FacadeEcommerce{
    constructor(){
        this.cart=new CartSubsystem();
        this.payment=new PayementSubSystem();
        this.track=new TrackOrderSubSystem();
    }
    operate(){
        this.cart.OperationA();
        this.payment.OperationB();
        this.track.OperationC();
    }
}
var ecommerce=new FacadeEcommerce();
ecommerce.operate()