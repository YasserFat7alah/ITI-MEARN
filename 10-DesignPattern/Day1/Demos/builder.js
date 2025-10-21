class Product {
    // constructor(prdName, prdPrice, Category, shippingFree, discount) {
    //     this.name = prdName;
    //     this.prdPrice = prdPrice;
    //     this.Category = Category;
    //     this.shippingFree = shippingFree;
    //     this.discount = discount;
    // }

    constructor(obj) {
        this.prdName = obj.prdName;
        this.prdPrice = obj.prdPrice;
        this.Category = obj.Category;
        this.shippingFree = obj.shippingFree;
        this.discount = obj.discount;
    }
}
// var prd=new Product("iphone",2000,"mobile",true,false);

class ProductBuilder {
    constructor(prdName, prdPrice, Category, shippingFree = true, discount = false) {
        this.prdName = prdName;
        this.prdPrice = prdPrice;
        this.Category = Category;
        this.shippingFree = shippingFree;
        this.discount = discount;
    }
    calcShipping() {
        this.shippingFree = false;
        this.prdPrice += 60;
        return this;

    }
    calcDiscount() {
        this.discount = true;
        this.prdPrice -= 100;
        return this;

    }
    builderFunc(){
        return new Product(this);
    }

}

var prd1=new ProductBuilder("LG",500,"TV");
console.log(prd1.builderFunc());

var prd2=new ProductBuilder("iphone",600,"mobile").calcShipping();
console.log(prd2.builderFunc());

var prd3=new ProductBuilder("Dell",300,"Labtop").calcShipping().calcDiscount();
console.log(prd3.builderFunc());

