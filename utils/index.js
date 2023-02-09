const fs = require('fs')

export const getInput = (exercise) => {
  return fs.readFileSync(`/home/lpaulino/aoc/${exercise}/input.txt`, 'utf8')
}
