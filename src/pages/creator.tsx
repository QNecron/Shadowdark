import React, { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import NavFlyout from "../components/nav/nav-flyout"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import Icon from "../components/icon/icon"
import Input from "../components/forms/input"
import Select from "../components/forms/select"
import TextArea from "../components/forms/textarea"

import Armors from "../../json/armors.json"
import Weapons from "../../json/weapons.json"

import { modifier, total, diceroll, hitdice, ancestry, armors, weapons } from "../utilities/functions"

import HeroDesktop from "../images/heroes/16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/1-1.webp"

const Creator: React.FC<PageProps> = () => {

  const [character, characterUpdate] = useState({
    name: "",
    ancestry: "None",
    ancestry_trait: "None",
    background: "None",
    deity: "None",
    alignment: "None",
    title: "None",
    class: "None",
    hit_dice: "d4",
    level: 0,
    hit_points: 0,
    attributes: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    },
    attributes_bonus: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0
    },
    armor_class: {
      base: 10,
      armor: 0,
      armor_slot: 0,
      properties: "-",
      shield: 0,
      shield_slot: 0
    },
    attacks: {
      weapon_1: "None",
      type_1: "-",
      range_1: "-",
      damage_1: "-",
      weapon_bonus_1: 0,
      properties_1: "-",
      weapon_2: "None",
      type_2: "-",
      range_2: "-",
      damage_2: "-",
      weapon_bonus_2: 0,
      properties_2: "-"
    },
    xp: 0,
    gp: 0,
    sp: 0,
    cp: 0,
    inventory: "",
    talents_spells: ""
  })
  const [characterSaved, characterSavedUpdate] = useState("")

  const save = (character, name) => {
    let hero = name

    if (!hero) return

    const data = JSON.stringify({character})

    const storage = window.localStorage

    storage.setItem(name, data)

    let characters = []

    for (var i = 0; i < storage.length; i++) {
      let key = storage.key(i);
      characters.push(key)
    }

    characterSavedUpdate(characters)

  }

  const saved = [].concat(characterSaved)

  const load = (name) => {

    if (!name) return;

    const storage = window.localStorage
    const saved = storage.getItem(name)

    if (saved) {
      let data = JSON.parse(saved, null, -1).character

      console.log(data)

      characterUpdate({
        ...character,
        name: data.name,
        alignment: data.alignment,
        ancestry: data.ancestry,
        ancestry_trait: data.ancestry_trait,
        attributes: {
          ...character.attributes,
          str: data.attributes.str,
          dex: data.attributes.dex,
          con: data.attributes.con,
          int: data.attributes.int,
          wis: data.attributes.wis,
          cha: data.attributes.cha
        },
        armor_class: {
          ...character.armor_class,
          base: data.armor_class.base,
          armor: data.armor_class.armor,
          armor_slot: data.armor_class.armor_slot,
          properties: data.armor_class.properties,
          shield: data.armor_class.shield,
          shield_slot: data.armor_class.shield_slot
        },
        attacks: {
          ...character.attacks,
          weapon_1: data.attacks.weapon_1,
          type_1: data.attacks.type_1,
          range_1: data.attacks.range_1,
          damage_1: data.attacks.damage_1,
          properties_1: data.attacks.properties_1,
          weapon_2: data.attacks.weapon_2,
          type_2: data.attacks.type_2,
          range_2: data.attacks.range_2,
          damage_2: data.attacks.damage_2,
          properties_2: data.attacks.properties_2
        },
        background: data.background,
        title: data.title,
        deity: data.deity,
        class: data.class,
        level: data.level,
        hit_dice: data.hit_dice,
        hit_points: data.hit_points,
        xp: data.xp,
        gp: data.gp,
        sp: data.sp,
        cp: data.cp,
        inventory: data.inventory,
        talents_spells: data.talents_spells
      })

    }
    else {
      console.log("No saved character data found.")
    }

  }

  const remove = (name) => {
    const storage = window.localStorage
    let characters = []

    if (!name) return

    storage.removeItem(name)

    for (var i = 0; i < storage.length; i++) {
      let key = storage.key(i);
      characters.push(key)
    }

    characterSavedUpdate(characters)

  }

  useEffect(() => {

    const storage = window.localStorage
    let characters = []

    for (var i = 0; i < storage.length; i++) {
      let key = storage.key(i)
      if (key !== "ally-supports-cache") characters.push(key)
    }

    characterSavedUpdate(characters)

  }, [])

  return (

    <Page>

      <Hero
        theme="shaded"
        desktop={HeroDesktop}
        desktopH="540"
        desktopW="1920"
        tablet={HeroDesktop}
        tabletH="384"
        tabletW="1024"
        mobile={HeroMobile}
        mobileH="480"
        mobileW="480"
        alt="Shadowdark Hero"
        loading="auto"
        x="2"
        y="2"
        heading="Creator"
      />

      <Section theme="bot">

        <Wrapper>

          <nav className="filters" aria-label="Manage Characters" role="navigation">

            <button
              className="btn-icon btn-primary"
              onClick={(e) => save(character, character.name)}
            >
              <span className="srt">Save Character</span>
              <Icon icon="upload" />
            </button>

            <NavFlyout
              btnClass="btn btn-primary"
              btnCopy="Characters"
              navId="character"
              navClass="nav-secondary"
            >

              <Link
                to="/character"
                className="btn-link btn-secondary full"
              >
                Character Sheets
              </Link>

              {characterSaved[0] && (
                <ul className="creator-characters">

                  {saved.map(item => (

                    <li className="creator-character" key={item}>

                      <div className="creator-name">{item}</div>

                      <button
                        className="btn-icon btn-primary"
                        onClick={(e) => load(item)}
                      >
                        <span className="srt">Load {item}</span>
                        <Icon icon="download" />
                      </button>

                      <button
                        className="btn-icon btn-primary"
                        onClick={(e) => remove(item)}
                      >
                        <span className="srt">Delete {item}</span>
                        <Icon icon="delete" />
                      </button>

                    </li>

                  ))}

                </ul>
              )}
              {!characterSaved[0] && (
                <div className="creator-no-characters">
                  <p>
                    No saved characters found, click the save (cloud upload) button to store your progress.
                  </p>
                </div>
              )}
            </NavFlyout>

          </nav>

          <Grid desktop="2" tablet="2" mobile="1" gap="32">

            <div className="left">

              <h2 className="creator-heading heading-3">Attributes</h2>

              <div className="creator-block">
                <div className="creator-subheading heading-5">Str</div>
                <div className="creator-mod">
                  {modifier(character.attributes.str, 0, 0)}
                </div>
                <Input
                  type="number"
                  value={character.attributes.str}
                  id="str"
                  label="Strength"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      str: e.target.value
                    }
                  })}
                />
                <div className="creator-dice">
                  <button className="btn-icon btn-primary" onClick={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      str: diceroll("d6", 3)
                    }
                  })}>
                    <span className="srt">Roll dice</span>
                    <Icon icon="dice" />
                  </button>
                </div>
              </div>

              <div className="creator-block">
                <div className="creator-subheading heading-5">Dex</div>
                <div className="creator-mod">
                  {modifier(character.attributes.dex, 0, 0)}
                </div>
                <Input
                  type="number"
                  value={character.attributes.dex}
                  id="dex"
                  label="Dexterity"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      dex: e.target.value
                    }
                  })}
                />
                <div className="creator-dice">
                  <button className="btn-icon btn-primary" onClick={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      dex: diceroll("d6", 3)
                    }
                  })}>
                    <span className="srt">Roll dice</span>
                    <Icon icon="dice" />
                  </button>
                </div>
              </div>

              <div className="creator-block">
                <div className="creator-subheading heading-5">Con</div>
                <div className="creator-mod">
                  {modifier(character.attributes.con, 0, 0)}
                </div>
                <Input
                  type="number"
                  value={character.attributes.con}
                  id="con"
                  label="Constitution"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      con: e.target.value
                    }
                  })}
                />
                <div className="creator-dice">
                  <button className="btn-icon btn-primary" onClick={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      con: diceroll("d6", 3)
                    }
                  })}>
                    <span className="srt">Roll dice</span>
                    <Icon icon="dice" />
                  </button>
                </div>
              </div>

              <div className="creator-block">
                <div className="creator-subheading heading-5">Int</div>
                <div className="creator-mod">
                  {modifier(character.attributes.int, 0, 0)}
                </div>
                <Input
                  type="number"
                  value={character.attributes.int}
                  id="int"
                  label="Intelligence"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      int: e.target.value
                    }
                  })}
                />
                <div className="creator-dice">
                  <button className="btn-icon btn-primary" onClick={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      int: diceroll("d6", 3)
                    }
                  })}>
                    <span className="srt">Roll dice</span>
                    <Icon icon="dice" />
                  </button>
                </div>
              </div>

              <div className="creator-block">
                <div className="creator-subheading heading-5">Wis</div>
                <div className="creator-mod">
                  {modifier(character.attributes.wis, 0, 0)}
                </div>
                <Input
                  type="number"
                  value={character.attributes.wis}
                  id="wis"
                  label="Wisdom"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      wis: e.target.value
                    }
                  })}
                />
                <div className="creator-dice">
                  <button className="btn-icon btn-primary" onClick={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      wis: diceroll("d6", 3)
                    }
                  })}>
                    <span className="srt">Roll dice</span>
                    <Icon icon="dice" />
                  </button>
                </div>
              </div>

              <div className="creator-block">
                <div className="creator-subheading heading-5">Cha</div>
                <div className="creator-mod">
                  {modifier(character.attributes.cha, 0, 0)}
                </div>
                <Input
                  type="number"
                  value={character.attributes.cha}
                  id="cha"
                  label="Charisma"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      cha: e.target.value
                    }
                  })}
                />
                <div className="creator-dice">
                  <button className="btn-icon btn-primary" onClick={(e) => characterUpdate({
                    ...character,
                    attributes: {
                      ...character.attributes,
                      cha: diceroll("d6", 3)
                    }
                  })}>
                    <span className="srt">Roll dice</span>
                    <Icon icon="dice" />
                  </button>
                </div>
              </div>

              <h2 className="creator-heading heading-3">Armor</h2>

              <div className="creator-block">
                <Select
                  value={character.armor_class.armor}
                  id="armor"
                  label="Armor"
                  helper="Armor"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    armor_class: {
                      ...character.armor_class,
                      armor: e.target.value,
                      armor_slot: armors(Armors, e.target.value, 1),
                      properties: armors(Armors, e.target.value, 4)
                    }
                  })}
                >
                  {Armors.map((data, index) => {
                    return (
                      <option
                        key={index}
                        value={data.ac}
                        slots={data.gear_slots}
                        properties={data.properties}
                      >
                        {data.name}
                      </option>
                    )
                  })}
                </Select>
                <Select
                  value={character.armor_class.shield}
                  id="shield"
                  label="Shield"
                  helper="Shield"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    armor_class: {
                      ...character.armor_class,
                      shield: e.target.value
                    }
                  })}
                >
                  <option value="0">-</option>
                  <option value="2" slots="1" properties="Occupies one hand">
                    Shield
                  </option>
                </Select>
              </div>

              <div className="creator-block">
                <div className="creator-total">
                  {total(
                    character.armor_class.armor,
                    character.armor_class.shield,
                    character.armor_class.armor <= 0 ? modifier(character.attributes.dex, 0, 0) : 0,
                    character.armor_class.armor <= 0 ? character.armor_class.base : 0,
                  )}
                </div>
                <div className="creator-armor">{character.armor_class.properties}</div>
                {/*<div className="creator-total">{character.armor_class.armor_slot}</div>*/}
              </div>

              <h2 className="creator-heading heading-3">Attacks</h2>

              <div className="creator-block attacks">
                {/*<Input
                  type="number"
                  value={character.attacks.weapon_bonus_1}
                  id="weapon-bonus1"
                  label="Weapon (A) Bonus"
                  helper="Bonus"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attacks: {
                      ...character.attacks,
                      weapon_bonus_1: e.target.value
                    }
                  })}
                />*/}
                <Select
                  value={character.attacks.weapon_1}
                  id="weapon1"
                  label="Weapon (A)"
                  helper="Weapon (A)"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attacks: {
                      ...character.attacks,
                      weapon_1: e.target.value,
                      type_1: weapons(Weapons, e.target.value, 1),
                      range_1: weapons(Weapons, e.target.value, 2),
                      damage_1: weapons(Weapons, e.target.value, 3),
                      properties_1: weapons(Weapons, e.target.value, 4)
                    }
                  })}
                >
                  <option value="None">-</option>
                  {Weapons.map((data, index) => {
                    return (
                      <option
                        key={index}
                        value={data.name}
                        type={data.type}
                        range={data.range}
                        damage={data.damage}
                        properties={data.properties}
                      >
                        {data.name}
                      </option>
                    )
                  })}
                </Select>
                <div className="creator-mod">{character.attacks.type_1}</div>
                <div className="creator-mod">{character.attacks.range_1}</div>
                <div className="creator-weapon">{character.attacks.damage_1}</div>
                <div className="creator-weapon">{character.attacks.properties_1}</div>
              </div>

              <div className="creator-block attacks">
                {/*<Input
                  type="number"
                  value={character.attacks.weapon_bonus_2}
                  id="weapon-bonus2"
                  label="Weapon (A) Bonus"
                  helper="Bonus"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attacks: {
                      ...character.attacks,
                      weapon_bonus_2: e.target.value
                    }
                  })}
                />*/}
                <Select
                  value={character.attacks.weapon_2}
                  id="weapon2"
                  label="Weapon (B)"
                  helper="Weapon (B)"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    attacks: {
                      ...character.attacks,
                      weapon_2: e.target.value,
                      type_2: weapons(Weapons, e.target.value, 1),
                      range_2: weapons(Weapons, e.target.value, 2),
                      damage_2: weapons(Weapons, e.target.value, 3),
                      properties_2: weapons(Weapons, e.target.value, 4)
                    }
                  })}
                >
                  <option value="None">-</option>
                  {Weapons.map((data, index) => {
                    return (
                      <option
                        key={index}
                        value={data.name}
                        type={data.type}
                        range={data.range}
                        damage={data.damage}
                        properties={data.properties}
                      >
                        {data.name}
                      </option>
                    )
                  })}
                </Select>
                <div className="creator-mod">{character.attacks.type_2}</div>
                <div className="creator-mod">{character.attacks.range_2}</div>
                <div className="creator-weapon">{character.attacks.damage_2}</div>
                <div className="creator-weapon">{character.attacks.properties_2}</div>
              </div>

            </div>

            <div className="right">

              <h2 className="creator-heading heading-3">Character</h2>

              <div className="creator-block">
                <Input
                  value={character.name}
                  id="name"
                  label="Name"
                  helper="Name"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    name: e.target.value
                  })}
                />
              </div>

              <div className="creator-block">
                <Select
                  value={character.ancestry}
                  id="ancestry"
                  label="Ancestry"
                  helper="Ancestry"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    ancestry: e.target.value,
                    ancestry_trait: ancestry(e.target.value)
                  })}
                >
                  {/* @TODO move to JSON data */}
                  <option value="None">-</option>
                  <option value="Dwarf">Dwarf</option>
                  <option value="Elf">Elf</option>
                  <option value="Goblin">Goblin</option>
                  <option value="Halfling">Halfling</option>
                  <option value="Half-orc">Half-orc</option>
                  <option value="Human">Human</option>
                </Select>
                <Select
                  value={character.background}
                  id="background"
                  label="Background"
                  helper="Background"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    background: e.target.value
                  })}
                >
                  {/* @TODO move to JSON data */}
                  <option value="None">-</option>
                  <option value="Urchin">Urchin</option>
                  <option value="Wanted">Wanted</option>
                  <option value="Cult Initiate">Cult Initiate</option>
                  <option value="Thieves' Guild">Thieves' Guild</option>
                  <option value="Banished">Banished</option>
                  <option value="Orphaned">Orphaned</option>
                  <option value="Wizard's Apprentice">Wizard's Apprentice</option>
                  <option value="Jeweler">Jeweler</option>
                  <option value="Herbalist">Herbalist</option>
                  <option value="Barbarian">Barbarian</option>
                  <option value="Mercenary">Mercenary</option>
                  <option value="Sailor">Sailor</option>
                  <option value="Acolyte">Acolyte</option>
                  <option value="Soldier">Soldier</option>
                  <option value="Ranger">Ranger</option>
                  <option value="Scout">Scout</option>
                  <option value="Minstrel">Minstrel</option>
                  <option value="Scholar">Scholar</option>
                  <option value="Noble">Noble</option>
                  <option value="Chirurgeon">Chirurgeon</option>
                </Select>
              </div>

              <div className="creator-block">
                <Select
                  value={character.alignment}
                  id="alignment"
                  label="Alignment"
                  helper="Alignment"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    alignment: e.target.value
                  })}
                >
                  <option value="None">-</option>
                  <option value="Lawful">Lawful</option>
                  <option value="Chaotic">Chaotic</option>
                  <option value="Neutral">Neutral</option>
                </Select>
                <Input
                  value={character.deity}
                  id="deity"
                  label="Deity"
                  helper="Deity"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    deity: e.target.value
                  })}
                />
              </div>

              <h2 className="creator-heading heading-3">Class</h2>

              <div className="creator-block">
                <Select
                  value={character.class}
                  id="class"
                  label="Class"
                  helper="Class"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    class: e.target.value,
                    hit_dice: hitdice(e.target.value)
                  })}
                >
                  <option value="None">-</option>
                  <option value="Fighter">Fighter</option>
                  <option value="Priest">Priest</option>
                  <option value="Thief">Thief</option>
                  <option value="Wizard">Wizard</option>
                </Select>
                {/* @TODO class + level + alignment = title */}
                <Input
                  value={character.title}
                  id="title"
                  label="Title"
                  helper="Title"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    title: e.target.value
                  })}
                />
              </div>

              <h2 className="creator-heading heading-3">Hit Points</h2>

              <div className="creator-block">
                <div className="creator-total">
                  {total(
                    character.hit_points,
                    character.ancestry === "Dwarf" ? 2 : 0,
                    0, 0
                  )}
                </div>
                <Input
                  type="number"
                  value={character.hit_points}
                  id="hp"
                  label="Hit Points"
                  helper="HP"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    hit_points: e.target.value
                  })}
                />
                <Input
                  type="number"
                  value={character.level}
                  id="level"
                  label="Level"
                  helper="Level"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    level: e.target.value
                  })}
                />
                <div className="creator-mod">
                  {character.hit_dice}
                </div>
                <div className="creator-dice">
                  <button className="btn-icon btn-primary" onClick={(e) => characterUpdate({
                    ...character,
                    hit_points: diceroll(hitdice(character.class), character.level)
                  })}>
                    <span className="srt">Roll dice</span>
                    <Icon icon="dice" />
                  </button>
                </div>
              </div>

              <h2 className="creator-heading heading-3">Talents / Spells</h2>

              <div className="creator-block">
                <TextArea
                  value={character.talents_spells}
                  id="talents-spells"
                  label="Talents / Spells"
                  srt="true"
                  rows="8"
                  change={(e) => characterUpdate({
                    ...character,
                    talents_spells: e.target.value
                  })}
                />
              </div>

            </div>

          </Grid>

          <h2 className="creator-heading creator-heading-spacer heading-3">Inventory / Rewards</h2>

          <div className="creator-block rewards">
            <div className="creator-subheading heading-5">XP</div>
            <Input
              type="number"
              value={character.xp}
              id="xp"
              label="Experience"
              srt="true"
              change={(e) => characterUpdate({
                ...character,
                xp: e.target.value
              })}
            />
            <div className="creator-subheading heading-5">GP</div>
            <Input
              type="number"
              value={character.gp}
              id="gp"
              label="Gold Pieces"
              srt="true"
              change={(e) => characterUpdate({
                ...character,
                gp: e.target.value
              })}
            />
            <div className="creator-subheading heading-5">SP</div>
            <Input
              type="number"
              value={character.sp}
              id="sp"
              label="Silver Pieces"
              srt="true"
              change={(e) => characterUpdate({
                ...character,
                sp: e.target.value
              })}
            />
            <div className="creator-subheading heading-5">CP</div>
            <Input
              type="number"
              value={character.cp}
              id="cp"
              label="Copper Pieces"
              srt="true"
              change={(e) => characterUpdate({
                ...character,
                cp: e.target.value
              })}
            />
          </div>

          <div className="creator-block rewards">
            <TextArea
              value={character.inventory}
              id="inventory"
              label="Inventory"
              helper="Inventory"
              srt="true"
              rows="12"
              change={(e) => characterUpdate({
                ...character,
                inventory: e.target.value
              })}
            />
          </div>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default Creator

export const Head: HeadFC = () => (
  <SEO
    title="Creator | Umbral Tools"
    description="Create a player character or non-player character; then preview, save, update, or download your creation."
  />
)
