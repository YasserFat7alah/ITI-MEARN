// 8-Make demo to apply open-closed Principle

/* --- --- --- --- Open-Closed Priciple --- --- --- --- */
class Account {
  calculateInterest() {}
}

class SavingAccount extends Account {
  calculateInterest() {
    return "Saving Account Interest = 4%";
  }
}

class CurrentAccount extends Account {
  calculateInterest() {
    return "Current Account Interest = 1%";
  }
}

class CustomAccount extends Account {
  calculateInterest() {
    return "Fixed Deposit Interest = 7%";
  }
}

function showInterest(accounts) {
  accounts.forEach((acc) => console.log(acc.calculateInterest()));
}

const acc1 = new SavingAccount();
const acc2 = new CurrentAccount();
const acc3 = new CustomAccount();

console.log(acc1.calculateInterest());
console.log("--- ---- ---- ---");
console.log(acc2.calculateInterest());
console.log("--- ---- ---- ---");
console.log(acc3.calculateInterest());
console.log("--- ---- ---- ---");
