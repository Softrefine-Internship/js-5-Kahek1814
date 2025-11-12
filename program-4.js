// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {

    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount} into Account ${this.accountNumber}.`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        } else if (amount > this.balance) {
            console.log(`Insufficient funds in Account ${this.accountNumber}.`);
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount} from Account ${this.accountNumber}.`);
        }
    }


    displayDetails() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Current Balance: $${this.balance}`);
    }
}
let account1 = new BankAccount("1", 500);
let account2 = new BankAccount("2", 1000);
account1.displayDetails();
account2.displayDetails();
account1.deposit(200);
account1.withdraw(150);

account2.deposit(500);
account2.withdraw(1200);
account1.displayDetails();
account2.displayDetails();
