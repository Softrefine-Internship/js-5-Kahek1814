// Write a JavaScript program that creates a class called Product with properties for product
//  ID, name, and price. Include a method to calculate the total price by multiplying the price 
// by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product 
// class and adds an additional property for the warranty period. Override the total price 
// calculation method to include the warranty period. Create an instance of the PersonalCareProduct
//  class and calculate its total price.
class Product {
  constructor(productId, name, price) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }
  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(productId, name, price, warrantyPeriod) {
    super(productId, name, price); 
    this.warrantyPeriod = warrantyPeriod;
  }


  calculateTotalPrice(quantity) {

    const baseTotal = super.calculateTotalPrice(quantity);

    const warrantyCost = this.warrantyPeriod * 10;

    return baseTotal + warrantyCost;
  }
}
const shaver = new PersonalCareProduct(101, "Electric Shaver", 50, 2);

const quantity = 3;
const totalPrice = shaver.calculateTotalPrice(quantity);

console.log(`Product: ${shaver.name}`);
console.log(`Quantity: ${quantity}`);
console.log(`Warranty Period: ${shaver.warrantyPeriod} years`);
console.log(`Total Price: $${totalPrice}`);
