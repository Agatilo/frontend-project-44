import playGame from '../index.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRoundData() {
  const num = getRandomNumber(1, 50)
  const isNumberEven = num % 2 === 0
  const answer = isNumberEven ? 'yes' : 'no'

  const question = `${num}`
  const correctAnswer = String(answer)

  return [question, correctAnswer]
}

export function playEvenGame() {
  playGame(gameDescription, getRoundData)
}

// import readlineSync from 'readline-sync'

// export function playEvenGame() {

//   console.log('Welcome to the Brain Games!')
//   let userName = readlineSync.question('May I have your name? ')
//   console.log('Hello, ' + userName + '!')

//   console.log('Answer "yes" if the number is even, otherwise answer "no".')

//   let correctAnswers = 0
//   const roundsToWin = 3

//   while (correctAnswers < roundsToWin) {
//     const number = Math.floor(Math.random() * 100) + 1
//     const isNumberEven = number % 2 === 0
//     const correctAnswer = isNumberEven ? 'yes' : 'no'

//     const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `)

//     if (userAnswer.toLocaleLowerCase() !== correctAnswer) {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
//       console.log(`Let's try again, ${userName}`)
//       return
//     }
//     console.log('Correct!')
//     correctAnswers += 1
//   }

//   console.log(`Congratulations, ${userName}!`)
// }
