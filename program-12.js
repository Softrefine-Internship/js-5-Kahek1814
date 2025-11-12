// Write a JavaScript program that creates a class called University with properties 
// for university name and departments. Include methods to add a department, remove a
// department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(universityName) {
    this.universityName = universityName;
    this.departments = [];
  }

  addDepartment(departmentName) {
    if (!this.departments.includes(departmentName)) {
      this.departments.push(departmentName);
      console.log(`Department "${departmentName}" added to ${this.universityName}.`);
    } else {
      console.log(`Department "${departmentName}" already exists in ${this.universityName}.`);
    }
  }

  removeDepartment(departmentName) {
    const index = this.departments.indexOf(departmentName);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Department "${departmentName}" removed from ${this.universityName}.`);
    } else {
      console.log(`Department "${departmentName}" not found in ${this.universityName}.`);
    }
  }

  displayDepartments() {
    console.log(`\nDepartments in ${this.universityName}:`);
    if (this.departments.length === 0) {
      console.log("No departments available.");
    } else {
      this.departments.forEach((dept, i) => {
        console.log(`${i + 1}. ${dept}`);
      });
    }
  }
}
const uni = new University("National Institute of Technology");
uni.addDepartment("Computer Science");
uni.addDepartment("Mechanical Engineering");
uni.addDepartment("Civil Engineering");
uni.displayDepartments();
uni.removeDepartment("Mechanical Engineering");
uni.displayDepartments();
