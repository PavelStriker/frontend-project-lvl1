import makeRandomNumber from '../math.js';
import engine from '../engine.js';

const bgCalc = (sign, num1, num2) => {
  let rigthAnswer;
  switch (sign) {
    case '+':
      rigthAnswer = num1 + num2;
      break;
    case '*':
      rigthAnswer = num1 * num2;
      break;
    case '-':
      rigthAnswer = num1 - num2;
      break;
    default:
  }

  return rigthAnswer;
};

const signs = ['+', '-', '*'];
const minNum = 1;
const maxNum = 25;
const getGameData = () => {
  const sign = signs[makeRandomNumber(0, signs.length - 1)];
  const firstNum = makeRandomNumber(minNum, maxNum);
  const secondNum = makeRandomNumber(minNum, maxNum);
  const question = `${firstNum} ${sign} ${secondNum}`;
  const rigthAnswer = String(bgCalc(sign, firstNum, secondNum));

  return [rigthAnswer, question];
};

const greeting = 'What is the result of the expression?';
const bgCalcStart = () => engine(greeting, getGameData);

export default bgCalcStart;
