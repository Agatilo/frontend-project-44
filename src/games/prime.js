import playGame from '../index.js'

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getRoundData() {
    const randomNum = getRandomNumber(1, 99)
    const answer = isPrime(randomNum) ? 'yes' : 'no'
    const question = `${randomNum}`
    const currentAnswer = String(answer)

    return [question, currentAnswer]
}

export function playPrimeGame() {
    playGame(gameDescription, getRoundData)
}