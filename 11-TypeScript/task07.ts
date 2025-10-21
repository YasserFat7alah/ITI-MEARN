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

interface IProduct {
  id: number;
  productName: string;
  price: number;
  description: string;
}

class Product implements IProduct {
  id: number;
  productName: string;
  price: number;
  description: string;

  constructor(id: number, name: string, price: number, desc: string) {
    this.id = id;
    this.productName = name;
    this.price = price;
    this.description = desc;
  }

  hasDiscount(): boolean {
    return true;
  }

  discount(): number {
    return this.hasDiscount() ? this.price * 0.1 : 0;
  }

  show(): string {
    return `
      Product: ${this.productName}
      Price: $${this.price}
      Description: ${this.description}
      Discount: $${this.discount()}
    `;
  }
}

const product = new Product(1, "Laptop", 1500, "High-end gaming laptop");

console.log("--- --- TASK 07 --- ---");
console.log(product.show());
console.log("--- --- --- --- --- ---");