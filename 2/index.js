const { getInput } = require('../utils')

const file = getInput(2)

const arr = file.split('\n').map((item) => item.split(' '))

function getScore(hand, reference) {
  return reference[hand]
}

function getOutcomeScore(playerOne, playerTwo, reference) {
  return reference[playerOne][playerTwo]
}

const shapePartOne = { X: 1, Y: 2, Z: 3 }

const outcomeScoresPartOne = {
  X: { A: 3, B: 0, C: 6 },
  Y: { A: 6, B: 3, C: 0 },
  Z: { A: 0, B: 6, C: 3 },
}

const scores = arr.map(
  (item) =>
    getScore(item[1], shapePartOne) +
    getOutcomeScore(item[1], item[0], outcomeScoresPartOne)
)

const result = scores.reduce(
  (accumulator, currentValue) => accumulator + currentValue
)

// PART 2

const outcomeScoresPartTwo = { X: 0, Y: 3, Z: 5 }

const shapePartTwo = {
  X: { A: 3, B: 1, C: 2 },
  Y: { A: 1, B: 2, C: 3 },
  Z: { A: 2, B: 3, C: 1 },
}

const scores2 = arr.map(
  (item) =>
    getScore(item[1], outcomeScoresPartTwo) +
    getOutcomeScore(item[1], item[0], shapePartTwo)
)

const result2 = scores2.reduce(
  (accumulator, currentValue) => accumulator + currentValue
)
