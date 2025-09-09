import playGame from '../index.js'

const gameDescription = 'What is the result of the expression?'

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const operators = ['+', '-', '*']

function calculate(a, b, operator) {
  switch (operator) {
    case '-':
      return a - b
    case '+':
      return a + b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

function getRoundData() {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)
  const operator = operators[getRandomNumber(0, operators.length - 1)]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))

  return [question, correctAnswer]
}

export function playCalcGame() {
  playGame(gameDescription, getRoundData)
}

//   console.log('Welcome to the Brain Games!')
//   let userName = readlineSync.question('May I have your name? ')
//   console.log('Hello, ' + userName + '!')

//   console.log('What is the result of the expression?')

//   let correctAnswers = 0
//   const roundsToWin = 3

//   const calculate = (a, b, operator) => {
//   switch (operator) {
//     case '+':
//       return a + b;
//     case '-':
//       return a - b;
//     case '*':
//       return a * b;
//     default:
//       return null;
//   }
// };

//   const operators = ['+', '-', '*']

//   while (correctAnswers < roundsToWin) {
//     const numberA = Math.floor(Math.random() * 100) + 1
//     const numberB = Math.floor(Math.random() * 100) + 1
//     const operator = operators[Math.floor(Math.random() * operators.length)];

//     const isCalc = `${numberA} ${operator} ${numberB}`
//     const answer = String(calculate(numberA, numberB, operator));

//     const userAnswer = readlineSync.question(`Question: ${isCalc}\nYour answer: `)

//     if (userAnswer.toLocaleLowerCase() !== answer) {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
//       console.log(`Let's try again, ${userName}`)
//       return
//     }
//     console.log('Correct!')
//     correctAnswers += 1
//   }

//   console.log(`Congratulations, ${userName}!`)
