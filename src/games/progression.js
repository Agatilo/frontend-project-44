import playGame from '../index.js'

const gameDescription = 'What number is missing in the progression?'

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRoundData() {
  const length = 10
  const start = getRandomNumber(1, 99)
  const step = getRandomNumber(1, 10)

  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  const hiddenIndex = getRandomNumber(0, length - 1)
  const currentAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return [question, currentAnswer]
}

export function playProgressionGame() {
  playGame(gameDescription, getRoundData)
}
