import makeRandomNumber from '../math.js';
import { engine } from '../engine.js';

const bgEven = (num) => num % 2 === 0;

const minNum = 1;
const maxNum = 500;
const getGameData = () => {
  const question = Number(makeRandomNumber(minNum, maxNum));
  const rigthAnswer = bgEven(question) ? 'yes' : 'no';

  return [rigthAnswer, question];
};

const greeting = 'Answer "yes" if the number is even, otherwise answer "no"';
const bgEvenStart = () => engine(greeting, getGameData);

export default bgEvenStart;
