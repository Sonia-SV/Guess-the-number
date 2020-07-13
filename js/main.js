'use strict';

//CONST
const attemptsField = document.querySelector('.js-attempts');
const clueField = document.querySelector('.js-clue');
const userImput = document.querySelector('.js-number');
const formSubmit = document.querySelector('.js-form');
const button = document.querySelector('.js-try-button');
const gameReset = document.querySelector('.js-reset-button');
const modal = document.querySelector('.js-modal');
const modalNumber = document.querySelector('.js-modal-number');
const modalRecount = document.querySelector('.js-moda-recount');
const modalReset = document.querySelector('.js-modal');

let attemps = 0;
let randomNumber = '';

//GENERATE RANDOM NUMBER
function getRandomNumber(max) {
  randomNumber = Math.ceil(Math.random() * max);
  console.log(`The number ${randomNumber} has been generated randomly`);
}

//FUNCTION
function handleGuessNumber(ev) {
  ev.preventDefault();
  paintFeedback();
}

const increaseAttemps = () => {
  attemps++;
  attemptsField.innerHTML = 'Número de intentos: ' + attemps;
};

const resetAttemps = () => {
  attemps = 0;
  attemptsField.innerHTML = 'Número de intentos: ' + attemps;
};

const paintClue = (clue) => {
  clueField.innerHTML = clue;
};

const paintFeedback = () => {
  const userValue = userImput.value;
  const userNumber = parseInt(userValue);
  if (userValue === '') {
    paintClue('Prueba escribiendo un número');
  } else {
    increaseAttemps();
    if (userNumber === randomNumber) {
      paintClue('Has ganado campeona!!!');
      releaseModal();
    } else if (userNumber < randomNumber && userNumber > 0) {
      paintClue('Pista: Demasiado bajo.');
    } else if (userNumber > randomNumber && userNumber < 101) {
      paintClue('Pista: Demasiado alto.');
    } else {
      paintClue('Pista: El número debe estar entre 1 y 100.');
    }
  }
};

//MODAL
const releaseModal = () => {
  modal.classList.remove('hidden');
  modalNumber.innerHTML = randomNumber;
  modalRecount.innerHTML = `Has acertado el número en ${attemps} intentos`;
};

function handleHiddenModal() {
  modal.classList.add('hidden');
}

//RESET GAME
const handleResetGame = () => {
  resetAttemps();
  paintClue('Pista: Escribe el número y dale a Prueba');
  getRandomNumber(100);
};

//EXECUTE FUNCTONS
getRandomNumber(100);

//LISTENERS
button.addEventListener('click', handleGuessNumber);
formSubmit.addEventListener('submit', handleGuessNumber);
gameReset.addEventListener('click', handleResetGame);
modalReset.addEventListener('click', handleHiddenModal);
