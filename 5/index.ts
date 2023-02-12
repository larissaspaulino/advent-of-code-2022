import { getInput } from '../utils'

const file = getInput(5)

const input = file.split('\n\n')
const lines = input[0].split('\n')
const instructions = input[1].split('\n')

const rawColumns: string[][] = []

for (let i = 0; i < 35; i += 4) {
  let column: string[] = []

  for (let j = 0; j < 8; j++) {
    let line = lines[j]

    column.push(line[i] + line[i + 1] + line[i + 2])
  }

  rawColumns.push(column)
}

const columns: string[][] = rawColumns.map((column) =>
  column.filter((item) => item !== '   ')
)

const instructionsArr: string[][] = instructions.map((line) => {
  const arr = line.split(' ')

  return [arr[1], arr[3], arr[5]]
})

const columnsOne = columns.map((item) => item)

function partOne(input) {
  instructionsArr.forEach((instruction) => {
    for (let i = 0; i < Number(instruction[0]); i++) {
      input[Number(instruction[2]) - 1].unshift(
        ...input[Number(instruction[1]) - 1].splice(0, 1)
      )
    }
  })

  return getLastCrates(input)
}

partOne(columnsOne)

function getLastCrates(arr) {
  return arr.map((crate) => crate[0][1]).join('')
}

// PART 2

const columnsPart2 = rawColumns.map((column) =>
  column.filter((item) => item !== '   ')
)

instructionsArr.forEach((instruction) => {
  const quantity = Number(instruction[0])
  const from = Number(instruction[1]) - 1
  const to = Number(instruction[2]) - 1

  columnsPart2[to].unshift(...columnsPart2[from].splice(0, quantity))
})

const lastCrates2 = getLastCrates(columnsPart2)

console.log(lastCrates2)
