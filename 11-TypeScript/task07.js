// 7- create an interface (IProduct)(have)
//      - id  ---> number
//      - productName --> string
//      - price --> number
//      - description – string
//   create class Product implement IProduct
//      - hasDiscount method return boolean
//      - discount method return number --> if a product has a dicount -- 10%
//      - show method --> return string
//   take an object from product ... show the product details
var Product = /** @class */ (function () {
    function Product(id, name, price, desc) {
        this.id = id;
        this.productName = name;
        this.price = price;
        this.description = desc;
    }
    Product.prototype.hasDiscount = function () {
        return true;
    };
    Product.prototype.discount = function () {
        return this.hasDiscount() ? this.price * 0.1 : 0;
    };
    Product.prototype.show = function () {
        return "\n      Product: ".concat(this.productName, "\n      Price: $").concat(this.price, "\n      Description: ").concat(this.description, "\n      Discount: $").concat(this.discount(), "\n    ");
    };
    return Product;
}());
var product = new Product(1, "Laptop", 1500, "High-end gaming laptop");
console.log("--- --- TASK 07 --- ---");
console.log(product.show());
console.log("--- --- --- --- --- ---");
