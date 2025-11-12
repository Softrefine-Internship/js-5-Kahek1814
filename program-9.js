// Write a JavaScript program that creates a class called Bank with properties for bank names and branches.
//  Include methods to add a branch, remove a branch, and display all branches.
//  Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }

  addBranch(branchName) {
    if (!this.branches.includes(branchName)) {
      this.branches.push(branchName);
      console.log(`Branch "${branchName}" added to ${this.bankName}.`);
    } else {
      console.log(`Branch "${branchName}" already exists.`);
    }
  }

  removeBranch(branchName) {
    const index = this.branches.indexOf(branchName);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Branch "${branchName}" removed from ${this.bankName}.`);
    } else {
      console.log(`Branch "${branchName}" not found.`);
    }
  }

  displayBranches() {
    console.log(`\n${this.bankName} Branches:`);
    if (this.branches.length === 0) {
      console.log("No branches available.");
    } else {
      this.branches.forEach((branch, i) => {
        console.log(`${i + 1}. ${branch}`);
      });
    }
  }
}

const myBank = new Bank("HDFC Bank");
myBank.addBranch("Mumbai");
myBank.addBranch("Delhi");
myBank.addBranch("Pune");
myBank.displayBranches();

myBank.removeBranch("Delhi");

myBank.displayBranches();
