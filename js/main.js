'use strict';
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(10);
console.log(random);
