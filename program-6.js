// Write a JavaScript program that creates a class called 'Employee' 
// with properties for name and salary. Include a method to calculate annual salary. 
// Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. 
// Override the annual salary calculation method to include bonuses for managers. 
// Create two instances of the 'Manager' class and calculate their annual salary.

class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }

    calcAnualSalary(){
        return this.salary*12;
    }
}
class Manager extends Employee{
    constructor(name,salary,department,bonus){
        super(name,salary);
        this.department=department;
        this.bonus = bonus; 
    }
    calcAnualSalary(){
        return this.salary*12+this.bonus;
    }
}

const emp1=new Manager("Karan",500,"IT",11);
const emp2=new Manager("Utsav",100,"Backend",50000)

console.log(emp1.calcAnualSalary())
console.log(emp2.calcAnualSalary())