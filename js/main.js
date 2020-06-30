'use strict';

//CONST
const attemptsField = document.querySelector('.js-attempts');
const clueField = document.querySelector('.js-clue');
const userImput = document.querySelector('.js-number');
const button = document.querySelector('.js-try-button');

//GENERATE RANDOM NUMBER
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(101);
console.log(`The number ${randomNumber} has been generated randomly`);

let attemps = 0;

//FUNCTIONS

function handleGuessNumber() {
  attemps++;
  const userValue = userImput.value;
  const userNumber = parseInt(userValue);

  attemptsField.innerHTML = 'Número de intentos: ' + attemps;

  if (userNumber > 100 || userNumber < 0) {
    clueField.innerHTML = 'Pista: El número debe estar entre 1 y 100.';
  } else if (userNumber < randomNumber) {
    clueField.innerHTML = 'Pista: Demasiado bajo.';
  } else if (userNumber > randomNumber) {
    clueField.innerHTML = 'Pista: Demasiado alto.';
  } else {
    clueField.innerHTML = 'Has ganado campeona!!!';
  }
}

button.addEventListener('click', handleGuessNumber);
