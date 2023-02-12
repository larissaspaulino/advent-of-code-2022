import { getInput } from '../utils'

const file = getInput(3)

const arr = file.split('\n')

const rucksack: [string[], string][] = arr.map((item) => {
  const middle = item.length / 2
  const firstHalf = item.slice(0, middle)
  const secondHalf = item.slice(middle, item.length)

  return [firstHalf.split(''), secondHalf]
})

const sharedItems = rucksack
  .map((item) => item[0].filter((letter) => item[1].includes(letter)))
  .map(([firstItem]) => firstItem)

const alphabetLC = 'abcdefghijklmnopqrstuvwxyz'.split('')
const alphabetUC = alphabetLC.map((item) => item.toUpperCase())

const values = sharedItems.map((item) => {
  let lower = alphabetLC.indexOf(item)
  const upper = alphabetUC.indexOf(item)

  return lower === -1 ? upper + 27 : lower + 1
})

const result = values.reduce(
  (accumulator, currentValue) => accumulator + currentValue
)

// PART 2

const groups: string[][] = []

for (let i = 0; i < arr.length; i += 3) {
  const group = [arr[i], arr[i + 1], arr[i + 2]]
  groups.push(group)
}

const sharedGroupItems: string[] = groups.map((group) => {
  const [firstElf] = group[0].split('').filter((letter) => {
    return group[1].includes(letter) && group[2].includes(letter) && letter
  })

  return firstElf
})

const valuesGroups: number[] = sharedGroupItems.map((item) => {
  let lower = alphabetLC.indexOf(item)
  const upper = alphabetUC.indexOf(item)

  return lower === -1 ? upper + 27 : lower + 1
})

const sumGroups = valuesGroups.reduce(
  (accumulator, currentValue) => accumulator + currentValue
)

console.log(sumGroups)
