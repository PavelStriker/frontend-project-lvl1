import makeRandomNumber from '../helper.js';
import engine from '../engine.js';

const gameDescription = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = makeRandomNumber(1, 101);
  const rigthAnswer = isEven(question) ? 'yes' : 'no';

  return [rigthAnswer, question];
};

const gameStart = () => engine(gameDescription, getGameData);

export default gameStart;
