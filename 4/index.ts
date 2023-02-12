import { getInput } from '../utils'

const file = getInput(4)

const arr = file.split('\n').map((item) => item.split(','))

const pairs = arr.filter((pair) => {
  const pair1 = pair[0].split('-')
  const pair2 = pair[1].split('-')

  return (
    (parseInt(pair1[0]) >= parseInt(pair2[0]) &&
      parseInt(pair1[1]) <= parseInt(pair2[1])) ||
    (parseInt(pair2[0]) >= parseInt(pair1[0]) &&
      parseInt(pair2[1]) <= parseInt(pair1[1]))
  )
})

console.log(pairs.length)

// PART 2

const pairsOverlapping = arr.filter((pair) => {
  const pair1 = pair[0].split('-')
  const pair2 = pair[1].split('-')

  return (
    (parseInt(pair2[0]) <= parseInt(pair1[1]) &&
      parseInt(pair2[1]) >= parseInt(pair1[0])) ||
    (parseInt(pair1[1]) >= parseInt(pair2[0]) &&
      parseInt(pair1[0]) <= parseInt(pair2[1]))
  )
})

console.log(pairsOverlapping.length)
