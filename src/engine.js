import readlineSync from 'readline-sync';

const engine = (gameDescription, getGameData) => {
  console.log('Welcome to Brain the Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${gameDescription}`);

  for (let i = 0; i < 3; i += 1) {
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
  const congrats = console.log(`Congratulations, ${name}!`);
  return congrats;
};

export default engine;
