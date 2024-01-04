import { nanoid } from 'nanoid'

export function generateBinarySearchSteps <T> (
  list: T[],
  condition: (item: T, index: number, list: T[]) => boolean
) {
  const steps = []

  let l = 0
  let r = list.length - 1

  while (l < r) {
    const c = l + Math.floor((r - l) / 2)

    steps.push({ l, r, c, id: nanoid() })

    if (condition(list[c], c, list)) {
      r = c
    } else {
      l = c + 1
    }
  }

  steps.push({ l, r, c: null, id: nanoid() })

  return steps
}
