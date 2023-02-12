import { getInput } from '../utils'

const file = getInput(6)

let arr = file.split('')

function getIndexOfNextPossibleMarker(arr) {
  const unique = new Set(arr)

  const a = Array.from(unique).filter((letter) => {
    return arr.indexOf(letter) !== arr.lastIndexOf(letter)
  })

  if (a.length === 0) {
    return undefined
  }

  return arr.indexOf(a[a.length - 1]) + 1
}

function partTwo() {
  let i = 0

  for (i; i < arr.length; ) {
    const marker = arr.slice(i, i + 14)

    const index = getIndexOfNextPossibleMarker(marker)

    if (!index) {
      break
    }

    i += index
  }

  return i + 14
}

console.log(partTwo())
