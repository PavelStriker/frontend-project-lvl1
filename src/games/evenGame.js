import makeRandomNumber from '../helper.js';
import engine from '../engine.js';

const descr = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const minNum = 1;
  const maxNum = 500;
  const question = makeRandomNumber(minNum, maxNum);
  const rigthAnswer = isEven(question) ? 'yes' : 'no';

  return [rigthAnswer, question];
};

const gameStart = () => engine(descr, getGameData);

export default gameStart;
