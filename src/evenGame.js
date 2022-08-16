import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('May I have your name?')
  const name = readlineSync.question('Your answer: ');
  console.log('Hello, ' + name + '!');
}

  const randomNumber = (maxNumb) => {
    return Math.floor(Math.random() * maxNumb);
  };

    export const bg_even = () => {
	console.log('May I have your name?')
        const name = readlineSync.question('Your answer: ');
        console.log('Hello, ' + name + '!');

	console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
        const number = randomNumber(100);
        console.log('Question: ' + number);
        const answer = readlineSync.question('Your answer: ');

        const evenCheckTrue = (number % 2 === 0) && (answer === 'yes');
        const evenCheckFalse = (number % 2 !== 0) && (answer === 'no');

        if (evenCheckTrue === true || evenCheckFalse === true) {
            console.log('Correct!');
        } else {
            const anotherVar = (answer === 'yes' ? 'no' : 'yes');
            const errorMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was '${anotherVar}'. \nLet's try again, ${name}!`);
            return errorMessage;
        };
    };
    console.log('Congratulations, ' + name + '!');
};
