import readlineSync from 'readline-sync';

export const bgProg = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');

  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);

  console.log('What number is missing in the progression?');

  const randomNumber = (maxNumb) => Math.floor(Math.random() * maxNumb);

  for (let i = 0; i < 3; i += 1) {
    const arr1 = [];

    const isProgression = () => {
      const number1 = randomNumber(10);
      const multiplier = Math.round(Math.random() * 2 + 1);
      const number2 = multiplier;
      for (let i = 0; i < number2 * 10; i += number2) {
        arr1.push(number1 + i);
      }
      return arr1;
    };

    isProgression();

    const getMultiplier = Math.round(Math.random() * 9);
    const num1 = getMultiplier;
    const hiddenNumb = arr1[num1];
    const arr2 = arr1;
    arr2[num1] = '..';
    const str = arr2.join(' ');
    console.log(`Question: ${str}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === Number(hiddenNumb)) {
      console.log('Correct!');
    } else {
      const anotherVar = (Number(answer) === Number(hiddenNumb) ? Number(answer) : Number(hiddenNumb));
      const errorMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was '${anotherVar}'. \nLet's try again, ${name}!`);
      return errorMessage;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
