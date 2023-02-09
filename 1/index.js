const { getInput } = require('../utils')

const file = getInput(1)

let array = file
  .split('\n\n')
  .map((item) => item.split('\n'))
  .map((item) => item.map((itemzinho) => Number(itemzinho)))

const sumArray = array.map((item) =>
  item.reduce((accumulator, currentValue) => accumulator + currentValue)
)

// part 2 - TOP3

let topThree = []

function findMaxValue(arr) {
  let value = Math.max(...sumArray)

  arr[arr.findIndex((item) => item === value)] = 0

  topThree.push(value)
}

findMaxValue(sumArray)
findMaxValue(sumArray)
findMaxValue(sumArray)

const sumTopThree = topThree.reduce(
  (accumulator, currentValue) => accumulator + currentValue
)
