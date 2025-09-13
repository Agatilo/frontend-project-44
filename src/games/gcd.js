import playGame from '../index.js'
import crypto from 'crypto'

const gameDescription = 'Find the greatest common divisor of given numbers.'

function getRandomNumber(min, max) {
  return crypto.randomInt(min, max + 1)
}

function getGCD(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

function getRoundData() {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)

  const num = getGCD(num1, num2)

  const question = `${num1} ${num2}`
  const correctAnswer = String(num)

  return [question, correctAnswer]
}

export function gameGcd() {
  playGame(gameDescription, getRoundData)
}
