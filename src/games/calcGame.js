import makeRandomNumber from '../helper.js';
import engine from '../engine.js';

const descr = 'What is the result of the expression?';

const bgCalculate = (sign, num1, num2) => {
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
// getGameData === функция, возвращающая правильный ответ и вопрос.
const getGameData = () => {
  const signs = ['+', '-', '*'];
  const minNum = 1;
  const maxNum = 25;
  const sign = signs[makeRandomNumber(0, signs.length - 1)];
  const firstNum = makeRandomNumber(minNum, maxNum);
  const secondNum = makeRandomNumber(minNum, maxNum);
  const question = `${firstNum} ${sign} ${secondNum}`;
  const rigthAnswer = String(bgCalculate(sign, firstNum, secondNum));

  return [rigthAnswer, question];
};

const calculateStart = () => engine(descr, getGameData);

export default calculateStart;
