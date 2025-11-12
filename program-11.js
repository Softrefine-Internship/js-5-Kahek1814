// Write a JavaScript program that creates a class called BankAccount with properties for account number,
//  account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts.
//  Create multiple instances of the BankAccount class and perform operations such as depositing, 
// withdrawing, and transferring money.
class BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`₹${amount} deposited to ${this.accountHolderName}'s account.`);
    } else {
      console.log("Deposit amount must be greater than zero.");
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`₹${amount} withdrawn from ${this.accountHolderName}'s account.`);
    } else if (amount > this.balance) {
      console.log("Insufficient balance for withdrawal.");
    } else {
      console.log("Withdrawal amount must be greater than zero.");
    }
  }
  transfer(amount, targetAccount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      targetAccount.balance += amount;
      console.log(
        `₹${amount} transferred from ${this.accountHolderName} to ${targetAccount.accountHolderName}.`
      );
    } else if (amount > this.balance) {
      console.log("Transfer failed: Insufficient balance.");
    } else {
      console.log("Transfer amount must be greater than zero.");
    }
  }

  displayAccountInfo() {
    console.log(
      `\nAccount Number: ${this.accountNumber}\nAccount Holder: ${this.accountHolderName}\nBalance: ₹${this.balance}`
    );
  }
}

const account1 = new BankAccount(1, "Karan", 500);
const account2 = new BankAccount(2, "Utsav", 1000);

account1.deposit(300);
account1.withdraw(200);
account1.transfer(400, account2); 
account1.displayAccountInfo();
account2.displayAccountInfo();
