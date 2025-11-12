// Write a JavaScript program to create a class called "Person" with properties for name, 
// age and country. Include a method to display the person's details. Create two instances 
// of the 'Person' class and display their details.

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}

let person1 = new Person("Alice", 30, "USA");
let person2 = new Person("Bob", 25, "Canada");

person1.displayDetails();
person2.displayDetails();
