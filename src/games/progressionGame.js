import makeRandomNumber from '../math.js';
import engine from '../engine.js';

const minStartNum = 0;
const maxStartNum = 10;
const minProgressNum = 0;
const maxProgressNum = 10;
const makeProgress = (count) => {
  const start = makeRandomNumber(minStartNum, maxStartNum);
  const diff = makeRandomNumber(minProgressNum, maxProgressNum);
  const iter = (iterCount, progression = []) => {
    if (iterCount === 0) {
      return progression;
    }

    const iterProgression = [start + diff * iterCount, ...progression];

    return iter(iterCount - 1, iterProgression);
  };

  return iter(count);
};

const progressionLength = 10;

const getGameData = () => {
  const progression = makeProgress(progressionLength);
  const switchedIndex = makeRandomNumber(0, progression.length - 2);
  const rigthAnswer = String(progression[switchedIndex]);
  progression[switchedIndex] = '..';
  const question = progression.join(' ');

  return [rigthAnswer, question];
};

const greeting = 'What number is missing in the progression?';
const bgProgStart = () => engine(greeting, getGameData);

export default bgProgStart;
