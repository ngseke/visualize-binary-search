export const algorithm = `
let l = 0
let r = list.length - 1

while (l < r) {
  const c = l + Math.floor((r - l) / 2)

  if (condition) {
    r = c
  } else {
    l = c + 1
  }
}

return l
`.trim()
