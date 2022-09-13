import makeRandomNumber from '../math.js';
import engine from '../engine.js';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const minNum = 1;
const maxNum = 25;
const getGameData = () => {
  const firstNum = makeRandomNumber(minNum, maxNum);
  const secondNum = makeRandomNumber(minNum, maxNum);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = String(findGCD(firstNum, secondNum));

  return [rightAnswer, question];
};

const greeting = 'Find the greatest common divisor of given numbers';
const bgGcdStart = () => engine(greeting, getGameData);

export default bgGcdStart;
