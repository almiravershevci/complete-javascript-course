'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Almira Vershevci',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // me i hek movement rows qe jon kon nfillim kur osht kriju faqja me html css

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
      <div class="movements__value">${mov}€</div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcPrintBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); //for forms
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }
  updateUI(currentAccount);
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
});

// user can request loan if there is at least one deposit with at least 10% of the requested loan amount.
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
  }
  updateUI(currentAccount);
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    inputCloseUsername.value = inputClosePin.value = '';
    inputClosePin.blur();

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// //SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); //index 4 is not included.
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //copy of array
// console.log([...arr]);

// //SPLICE - it mutates the original array.
// // console.log(arr.splice(2)); //removes 2 elements
// arr.splice(-2);
// console.log(arr); // a b c d e
// arr.splice(1, 2);
// console.log(arr); // a d e

// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'h', 'i', 'k', 'l'];
// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2); //it also reverses the original array, so it mutates.

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// const join = letters.join('-');
// console.log(join);

// //AT
// const nr = [23, 11, 64];
// console.log(nr.at(0));

// //Getting last array element
// console.log(nr[nr.length - 1]);
// console.log(nr.slice(-1)[0]);
// console.log(nr.at(-1));

// console.log('almira'.at(0));
// console.log('almira'.at(-2));

// for (const [i, m] of movements.entries()) {
//   // first indexi, elementi
//   if (m > 0) {
//     console.log(`Movement ${i + 1}. You deposited ${m}`);
//   } else {
//     console.log(`Movement ${i + 1}. You withdrew ${Math.abs(m)}`);
//   }
// }

// console.log('----FOR EACH----');
// movements.forEach(function (m, i, arr) {
//   // first elementi, indexi, tani array
//   if (m > 0) {
//     console.log(`Movement ${i + 1}. You deposited ${m}`);
//   } else {
//     console.log(`Movement ${i + 1}. You withdrew ${Math.abs(m)}`);
//   }
// }); // You can not break out of the loop with for each. so BREAK and CONTINUE do not work.
// //0: function(200)
// //0: function(450)
// //0: function(400)
// //...

// // Maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Sets
// const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// // MAP method
// const euro = 1.1;
// const movementUSD = movements.map(function (mov) {
//   return mov * euro;
// });
// console.log(movements);
// console.log(movementUSD);

// const movementUSDa = movements.map(mov => mov * euro);
// console.log(movementUSDa);

// const movementUSDf = [];
// for (const mov of movements) movementUSDf.push(mov * euro);
// console.log(movementUSDf);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementDescriptions);

// // FILTER method
// const deposits = movements.filter(mov => mov > 0);
// // const deposits = movements.filter(function(mov)){ return mov > 0 };
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0).map(mov => Math.abs(mov));
// console.log(withdrawals);

// console.log(movements);

// // REDUCE method
// //acc = accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, mov, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + mov;
// }, 0);
// console.log(balance);

// const balance2 = movements.reduce((acc, mov) => acc + mov, 0);
// console.log(balance2);

// // let balance2 = 0;
// // for (const mov of movements) {
// //   balance2 += mov;
// // }
// // console.log(balance2);

// console.log(movements);
// //Maximum value
// const maxValue = movements.reduce((acc, mov) => (mov > acc ? mov : acc), 0);
// console.log(maxValue);

// const eurToUsd = 1.1;

// //PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// // FIND method
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Almira Vershevci');
// console.log(accounts);
// console.log(account);

// // let accountw;
// // accounts.forEach(acc => {
// //   if (acc.owner === 'Almira Vershevci') {
// //     accountw = acc;
// //   }
// // });

// // console.log(accounts);
// // console.log(account);

// findLast and findLastIndex
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 2000
);
console.log(latestLargeMovementIndex);
console.log(
  `your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);

console.log(movements);

// Equality
console.log(movements.includes(-130));

// Condition - some
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Seperate callback
const depositt = mov => mov > 0;
console.log(movements.some(depositt));
console.log(movements.every(depositt));
console.log(movements.filter(depositt));

// flat
const arr = [[1, 2, 3], 3, [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[1, [2, 3]], [4, [5, 6, 7]], 5, 5];
console.log(arrDeep.flat(2));

const allMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(allMovements);

// flatMap
const allMovements2 = accounts
  .flatMap(acc => acc.movements) // only one level deep.
  .reduce((acc, mov) => acc + mov, 0);
console.log(allMovements2);

// Sorting arrays
const owners = ['zach', 'jonas', 'adam', 'martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

//return < 0 =>  A, B (keep order -> -1)
//return > 0 => B, A (switch order -> 1)

// Ascending
// movements.sort((a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

// Array grouping
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals'
);
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupedByActivity);

// const groupedAccounts = Object.groupBy(accounts, account => account.type);
// console.log(groupedAccounts);
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts);

const arraay = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arraay);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

// Empty arrays + fill method
const x = new Array(7);
console.log(x); // 7 empty elements

x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arraay.fill(23, 2, 6); // fill with 23 from index 2 to 6(do not take 6)
console.log(arraay);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementsUI2);
});

// toReversed , toSorted, toSpliced - do not mutate the org array.
console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);

// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log(newMovements);
console.log(movements);

// Array methods practice
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);
console.log(bankDepositSum);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .filter(mov => mov >= 1000).length;
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'but', 'or', 'and', 'on', 'in', 'with'];

  const capitalized = str => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalized(word)))
    .join(' ');
  return capitalized(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
