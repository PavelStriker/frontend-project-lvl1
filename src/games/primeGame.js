import makeRandomNumber from '../helper.js';
import engine from '../engine.js';

const gameDescription = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } if (num === 2) {
    return true;
  }

  let i = 2;
  while (i < (num / 2)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const getGameData = () => {
  const question = makeRandomNumber(1, 409);
  const rigthAnswer = isPrime(question) ? 'yes' : 'no';
  return [rigthAnswer, question];
};

const primeStart = () => engine(gameDescription, getGameData);

export default primeStart;
