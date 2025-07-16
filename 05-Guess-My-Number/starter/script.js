'use strict';

//  DOM - Document Object Model. Allows javascript to access html elements and styles to manipulate them.
//DOM are part of web APIs(libraries) that we can assess from our js code.

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!'; // me ndrru text content. - dom manipulation

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 21; //ne ja jep ni value
// console.log(document.querySelector('.guess').value); //me lexu / me marre value

let secretNumber = Math.trunc(Math.random() * 20) + 1; //random number from 0-20. math.trunc-me ja remove decimals. +1 se i qet 0-19 + 1 = 20
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // when we try to get something from the user interface psh input field it usually
  // always is a string, so we should convert that to number in order to compare number to number.
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct number!';
    displayMessage('correct number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too high' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game.');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
