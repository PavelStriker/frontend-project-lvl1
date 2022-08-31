import readlineSync from 'readline-sync';

export const bgCalc = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);

  const mathSign = ['+', '-', '*'];
  const randomNumber = (maxNumb) => Math.floor(Math.random() * maxNumb);
  // Алгоритм (3 раунда)
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber(10);
    const number2 = randomNumber(10);
    const randomMathSign = mathSign[Math.floor(mathSign.length * Math.random())];

    console.log(`Question: ${number} ${randomMathSign} ${number2}`);
    const answer = readlineSync.question('Your answer: ');

    const additionCheckTrue = (number + number2 === Number(answer));
    const deductionCheckTrue = (number - number2 === Number(answer));
    const multiplyCheckTrue = (number * number2 === Number(answer));

    if (additionCheckTrue === true && randomMathSign === '+') {
      console.log('Correct!');
    } if (deductionCheckTrue === true && randomMathSign === '-') {
      console.log('Correct!');
    } if (multiplyCheckTrue === true && randomMathSign === '*') {
      console.log('Correct!');
    }

    if (additionCheckTrue === false && randomMathSign === '+') {
      const anotherVar = (answer !== (number + number2) ? number + number2 : answer);
      const errorMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${anotherVar}". \nLet's try again, ${name}!`);
      return errorMessage;
    } if (deductionCheckTrue === false && randomMathSign === '-') {
      const anotherVar = (answer !== (number - number2) ? number - number2 : answer);
      const errorMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${anotherVar}". \nLet's try again, ${name}!`);
      return errorMessage;
    } if (multiplyCheckTrue === false && randomMathSign === '*') {
      const anotherVar = (answer !== (number * number2) ? number * number2 : answer);
      const errorMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${anotherVar}". \nLet's try again, ${name}!`);
      return errorMessage;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
