import { getInput } from '../utils'

const file = getInput(1)

let array = file
  .split('\n\n')
  .map((item) => item.split('\n'))
  .map((item) => item.map((itemzinho) => Number(itemzinho)))

const sortedArray = array
  .map((item) => item.reduce((acc, currentValue) => acc + currentValue))
  .sort((a, b) => b - a)

console.log(sortedArray[0]) // part1

const sumTopThree = sortedArray
  .slice(0, 3)
  .reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(sumTopThree) // part2
