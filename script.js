'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const guessValue = document.querySelector('.guess');

const drawSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = drawSecretNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const setBackgroundColorBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setSecretNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessValue.value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displaySecretNumber(secretNumber);

    setBackgroundColorBody('#60b347');
    setSecretNumberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }

  //     // When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = drawSecretNumber();

  displayScore(score);
  displaySecretNumber('?');
  displayMessage('Start guessing...');
  guessValue.value = '';

  setBackgroundColorBody('#222');
  setSecretNumberWidth('15rem');
});

alert('new feature');
