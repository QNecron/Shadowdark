export const modifier = (a, b, c) => {
  const add = parseInt(a) + parseInt(b) + parseInt(c)
  const total = Math.floor((add - 10) / 2)
  let modifier

  if (total >= 0) modifier = "+" + total.toString()
  else if (total <= -1) modifier = total.toString()

  return modifier
}

export const total = (a, b, c, d) => {
  let one = parseInt(a) ? parseInt(a) : 0
  let two = parseInt(b) ? parseInt(b) : 0
  let three = parseInt(c) ? parseInt(c) : 0
  let four = parseInt(d) ? parseInt(d) : 0
  const add = one + two + three + four

  return add
}

export const diceroll = (dice, count) => {
  let die = 0
  let roll = 0

  if (count === 0) return 0

  if (dice === "d100") { die = 100 }
  else if (dice === "d20") { die = 20 }
  else if (dice === "d12") { die = 12 }
  else if (dice === "d10") { die = 10 }
  else if (dice === "d8") { die = 8 }
  else if (dice === "d6") { die = 6 }
  else if (dice === "d4") { die = 4 }
  else if (dice === "d3") { die = 3 }
  else if (dice === "d2") { die = 2 }
  else {
    console.log("No dice defined.")
  }

  while (count >=1) {
    roll += 1 + Math.floor(Math.random() * Math.floor(die))
    count--
  }

  return roll

}

export const hitdice = (a) => {
  let type = "d4"

  if (a === "Fighter") { type = "d8" }
  else if (a === "Priest") { type = "d6" }
  else {
    type = "d4"
  }

  return type

}

export const ancestry = (a) => {
  let trait = "None"

  if (a === "Dwarf") { trait = "Stout" }
  else if (a === "Elf") { trait = "Farsight" }
  else if (a === "Goblin") { trait = "Keen Senses" }
  else if (a === "Halfling") { trait = "Stealthy" }
  else if (a === "Half-orc") { trait = "Mighty" }
  else if (a === "Human") { trait = "Ambitious" }
  else {
    console.log("Ancestry trait not found.")
  }

  return trait

}

export const armory = (json, weapon, output) => {
  let type = "-"
  let range = "-"
  let damage = "-"
  let properties = "-"

  json.map((data) => {

    if (weapon === data.name) {
      type = data.type
      range = data.range
      damage = data.damage
      properties = data.properties
    }

  })

  if (output === 1) return type
  else if (output === 2) return range
  else if (output === 3) return damage
  else if (output === 4) return properties
  else {
    console.log("Weapon not found.")
  }

}
