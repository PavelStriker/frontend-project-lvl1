import readlineSync from 'readline-sync';

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

export const bgPrime = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');

  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const randomNumber = (maxNumb) => Math.floor(Math.random() * maxNumb);

  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber(13);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const primeCheckTrue = (isPrime(number) === true) && (answer === 'yes');
    const primeCheckFalse = (isPrime(number) === false) && (answer === 'no');

    if (primeCheckTrue === true || primeCheckFalse === true) {
      console.log('Correct!');
    } else {
      const anotherVar = (answer === 'yes' ? 'no' : 'yes');
      const errorMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was '${anotherVar}'. \nLet's try again, ${name}!`);
      return errorMessage;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
