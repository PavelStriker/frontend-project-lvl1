import readlineSync from 'readline-sync';

const engine = (description, getGameData) => {
  console.log('Welcome to Brain the Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  const gameCount = 3;

  for (let i = 0; i < gameCount; i += 1) {
    const [rigthAnswer, question] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rigthAnswer) {
      console.log(`'${answer}' is wrong answer, corrent answer was '${rigthAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
