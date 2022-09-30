import makeRandomNumber from '../helper.js';
import engine from '../engine.js';

const description = 'Find the greatest common divisor of given numbers';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const getGameData = () => {
  const minNum = 1;
  const maxNum = 25;
  const firstNum = makeRandomNumber(minNum, maxNum);
  const secondNum = makeRandomNumber(minNum, maxNum);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = String(getGCD(firstNum, secondNum));

  return [rightAnswer, question];
};

const gcdStart = () => engine(description, getGameData);

export default gcdStart;
