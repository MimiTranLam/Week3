const user = {
    currentBalance: 5000,
    transactionsMonthToDate: [{}],
  };
  
  user.transactionsMonthToDate = [
    {
      amount: 3000,
      type: "deposit",
      category: "Salary - Full Time",
    },
    { category: "Dining", amount: 50, type: "withdrawal" },
    { category: "Dining", amount: 100, type: "withdrawal" },
    { category: "Rent", amount: 2000, type: "withdrawal" },
    { category: "Groceries", amount: 250, type: "withdrawal" },
    {
      amount: 250,
      type: "withdrawal",
      category: "Transportation",
    },
    {
      amount: 250,
      type: "withdrawal",
      category: "Health",
    },
    {
      amount: 50,
      type: "withdrawal",
      category: "Travel - Fuel",
    },
    { category: "Living", amount: 650, type: "withdrawal" },
    { category: "Groceries", amount: 500, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    {
      amount: 5000,
      type: "deposit",
      category: "Salary - Part Time",
    },
    { category: "Groceries", amount: 450, type: "withdrawal" },
    {
      amount: 58,
      type: "withdrawal",
      category: "Transportation",
    },
    {
      amount: 50,
      type: "withdrawal",
      category: "Health",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Transportation",
    },
    {
      amount: 150,
      type: "withdrawal",
      category: "Transportation",
    },
    { category: "Groceries", amount: 100, type: "withdrawal" },
    {
      amount: 100,
      type: "withdrawal",
      category: "Entertainment",
    },
    {
      amount: 500,
      type: "withdrawal",
      category: "Entertainment",
    },
    { category: "Groceries", amount: 300, type: "withdrawal" },
    {
      amount: 500,
      type: "withdrawal",
      category: "Travel - Airline",
    },
    {
      amount: 1500,
      type: "withdrawal",
      category: "Travel - Hotel",
    },
    {
      amount: 50,
      type: "withdrawal",
      category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
      amount: 500,
      type: "deposit",
      category: "Portfolio Dividends",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Entertainment",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
      amount: 100,
      type: "withdrawal",
      category: "Entertainment",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Health",
    },
  ];

// P1
/*
Balance: $5000
Transaction History:
- You withdrew $500. The new balance is $4500.
- You deposited $1000. The new balance is $5500.
...
*/

console.log("Balance: " + user.currentBalance);
console.log("Transaction History:");

let balance = user.currentBalance;
transactionHistory = () => {
  user.transactionsMonthToDate.forEach((x) => {
    let amount = x.amount;
    if (x.type == "withdrawal") {
      balance -= amount;
      console.log(`- You withdrew $${amount}. The new balance is $${balance}.`);
      } else if (x.type == "deposit") {
        balance += amount;
        console.log(`- You deposited $${amount}. The new balance is $${balance}.`)
        }
    })
};

console.log(transactionHistory());

// P2 - Define a function that returns the total number of deposits. + P4 - Define a function that returns the sum of deposits.
function deposits() {
  let depositAmount = 0;
  let depositTimes = 0;
  user.transactionsMonthToDate.forEach((i) => {
    if (i.type == "deposit") {
        depositAmount += i.amount;
        depositTimes += 1;
        return;
    }
  });
  console.log(`# of deposits: ${depositAmount}, total deposits: ${depositTimes}`);
};

deposits();

// P3 - Define a function that returns the total number of withdrawals. + P5 - Define a function that returns the sum of withdrawals.
function withdrawals() {
  let withdrawalAmount = 0;
  let withdrawalTimes = 0;
  user.transactionsMonthToDate.forEach((i) => {
    if (i.type == "withdrawal") {
      withdrawalAmount += i.amount;
      withdrawalTimes += 1;
        return;
    }
  });
  console.log(`# of withdrawals: ${withdrawalAmount}, total withdrawals: ${withdrawalTimes}`);
};

withdrawals();

// P6 - Define a function that returns the difference between deposits and withdrawals.
function difference() {
  let withdrawalAmount = 0;
  let depositAmount = 0;
  user.transactionsMonthToDate.forEach((i) => {
    if (i.type == "withdrawal") {
      withdrawalAmount += i.amount;
      return;
    } else if (i.type == "deposit") {
      depositAmount += i.amount;
      return;
    }
  });

  a = withdrawalAmount;
  b = depositAmount;
  if (a > b) {
    minus = a - b;
    console.log("difference is: " + minus);
  } else if (b > a) {
    minus = b - a;
    console.log("difference is: " + minus);
  }
};

difference();

// P7 - Define a function that returns a new balance for the next month.
function newBalance() {
  let balance = user.currentBalance;
  user.transactionsMonthToDate.forEach((i) => {
    if (i.type == "withdrawal") {
      balance -= i.amount;
      return;
    } else if (i.type == "deposit") {
      balance += i.amount;
      return;
    }
  });
  console.log("new balance is: " + balance);
};

newBalance();

// P8 - Define a function that returns the sum of the groceries.
function groceries() {
  let sum = 0;
  user.transactionsMonthToDate.forEach((i) => {
    if (i.category == "Groceries") {
      sum += i.amount;
      return;
    }
  });
  console.log("total spent on groceries: " + sum);
};

groceries();

// P9 - Define a function that returns the sum of the entertainment.
function entertainment() {
  let sum = 0;
  user.transactionsMonthToDate.forEach((i) => {
    if (i.category == "Entertainment") {
      sum += i.amount;
      return;
    }
  });
  console.log("total spent on entertainment: " + sum);
};

entertainment();

// P9 - Define a function that returns the sum of the travel.
function travel() {
  let sum = 0;
  user.transactionsMonthToDate.forEach((i) => {
    if (i.category.split(" ")[0] == "Travel") {
      sum += i.amount;
      return;
    }
  });
  console.log("total spent on travel: " + sum);
};

travel();

// P10 - Define a function that given a conversion rate of 23000vnd to 1usd returns if the account spent more usd than vnd was deposited into the account for the month.
function conversion() {
  let deposit = 0;
  let withdrawal = 0;
  const usdToVND = 23000;

  user.transactionsMonthToDate.forEach((i) => {
    if (i.type == "deposit") {
      deposit += i.amount;
      vndDeposit = deposit * usdToVND;
      return;
    } else if (i.type == "withdrawal") {
      withdrawal += i.amount;
      return;
    }
  });

  a = vndDeposit;
  b = deposit;
  if (a > b) {
    console.log("more vnd in than usd out.")
  } else if (a < b) {
    console.log("more usd out in than vnd in.")
  }
}

conversion();

// P11 - Define a function that returns an array of new objects where currency is VND and the amount is it's converted amount.
function newObject() {
  convertedTransactions = [];
  const usdToVND = 23000;
  user.transactionsMonthToDate.forEach((i) => {
    var converted = i.amount * usdToVND;
    i.amount = converted;
    convertedTransactions.push(i);
  });
  console.log(convertedTransactions);
}

newObject();

// P12 - Use a for loop to print out the transaction history for the month in this format:
const usdToVND = 23000;
let balanceVND = (user.currentBalance * usdToVND).toLocaleString('vi', {style : 'currency', currency : 'VND'});

console.log("Balance: " + balanceVND);
console.log("Transaction History:\n");

convertedTransactionHistory = () => {
  user.transactionsMonthToDate.forEach((x) => {
    let convertAmount = x.amount * usdToVND;
    if (x.type == "withdrawal") {
      balanceVND -= convertAmount;
      console.log(`- You withdrew ${convertAmount.toLocaleString('vi', {style : 'currency', currency : 'VND'})}. The new balance is ${balanceVND.toLocaleString('vi', {style : 'currency', currency : 'VND'})}.`);
      } else if (x.type == "deposit") {
        balanceVND += convertAmount;
        console.log(`- You deposited ${convertAmount.toLocaleString('vi', {style : 'currency', currency : 'VND'})}. The new balance is ${balanceVND.toLocaleString('vi', {style : 'currency', currency : 'VND'})}.`)
        }
    })
};

console.log(convertedTransactionHistory());
console.log(user.transactionsMonthToDate.length);