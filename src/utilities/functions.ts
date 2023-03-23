export const modifier = (a, b, c) => {
  const add = parseInt(a) + parseInt(b) + parseInt(c)
  const total = Math.floor((add - 10) / 2)
  return total
}

export const total = (a, b, c, d) => {
  let one = parseInt(a) ? parseInt(a) : 0
  let two = parseInt(b) ? parseInt(b) : 0
  let three = parseInt(c) ? parseInt(c) : 0
  let four = parseInt(d) ? parseInt(d) : 0
  const add = one + two + three + four
  return add
}
