import readlineSync from 'readline-sync';

export const gcd = (x, y) => {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
};

export const bgGcd = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');

  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');

  const randomNumber = (maxNumb) => Math.floor(Math.random() * maxNumb);

  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumber(100);
    const number2 = randomNumber(100);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');

    const gcdCheck = gcd(number1, number2);

    if (Number(answer) === Number(gcdCheck)) {
      console.log('Correct!');
    } else {
      const anotherVar = (Number(answer) === Number(gcdCheck) ? Number(answer) : Number(gcdCheck));
      const errorMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was '${anotherVar}'. \nLet's try again, ${name}!`);
      return errorMessage;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
