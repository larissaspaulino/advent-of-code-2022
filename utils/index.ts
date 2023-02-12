import fs from 'fs'

export function getInput(exercise) {
  return fs.readFileSync(
    `/home/lpaulino/meus projetos/aoc/${exercise}/input.txt`,
    'utf8'
  )
}
