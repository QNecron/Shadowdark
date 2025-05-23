import React, { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import Icon from "../components/icon/icon"
import TextArea from "../components/forms/textarea"

import { modifier, total } from "../utilities/functions"

const Character: React.FC<PageProps> = () => {

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

  const details = (string1, string2, string3) => {
    let final = ""

    if (string1) final = string2 + "\r\n" + string3 + "\r\n" + "Armor properties: " + string1
    else final = string2 + "\r\n" + string3

    return final
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

      <Section>

        <Wrapper>

          <Grid
            desktop="creator-sheet"
            tablet="creator-sheet"
            mobile="creator-sheet"
            gap="32"
          >

            <aside className="character-sheet-saved" role="complementary">

              <Link
                to="/creator"
                className="btn-link btn-secondary full"
              >
                Character Creator
              </Link>

              {characterSaved[0] && (
                <ul className="creator-characters">

                  {saved.map(item => (

                    <li className="creator-character" key={item}>

                      <button
                        className="btn-icon btn-primary"
                        onClick={(e) => load(item)}
                      >
                        <span className="srt">Load {item}</span>
                        <Icon icon="download" />
                      </button>
                      
                      <div className="creator-name">{item}</div>

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
                    No saved characters found, characters must be saved first before they can be loaded into the character sheet.
                  </p>
                </div>
              )}
            </aside>

            <div className="character-sheet">

              <h1 className="character-sheet-name heading-1">
                {character.name}
              </h1>

              <div className="character-sheet-xp">
                {character.xp}
              </div>

              <div className="character-sheet-level">
                {character.level}
              </div>

              <Grid desktop="2" tablet="2" mobile="1" gap="32">

                <div className="left">

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">STR</div>
                    <div className="character-sheet-value">{character.attributes.str}</div>
                    <div className="character-sheet-mod">{modifier(character.attributes.str, 0, 0)}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">DEX</div>
                    <div className="character-sheet-value">{character.attributes.dex}</div>
                    <div className="character-sheet-mod">{modifier(character.attributes.dex, 0, 0)}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">CON</div>
                    <div className="character-sheet-value">{character.attributes.con}</div>
                    <div className="character-sheet-mod">{modifier(character.attributes.con, 0, 0)}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">INT</div>
                    <div className="character-sheet-value">{character.attributes.int}</div>
                    <div className="character-sheet-mod">{modifier(character.attributes.int, 0, 0)}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">WIS</div>
                    <div className="character-sheet-value">{character.attributes.wis}</div>
                    <div className="character-sheet-mod">{modifier(character.attributes.wis, 0, 0)}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">CHA</div>
                    <div className="character-sheet-value">{character.attributes.cha}</div>
                    <div className="character-sheet-mod">{modifier(character.attributes.cha, 0, 0)}</div>
                  </div>

                  <div className="character-sheet-block separator">
                    <div className="character-sheet-prop">Hit Points</div>
                    <div className="character-sheet-value">
                      {total(
                        character.hit_points,
                        modifier(character.attributes.con, 0, 0), 
                        character.ancestry === "Dwarf" ? 2 : 0, 
                        0
                      )}
                    </div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">Armor Class</div>
                    <div className="character-sheet-value">
                      {total(
                        character.armor_class.armor,
                        character.armor_class.shield,
                        character.armor_class.armor <= 0 ? modifier(character.attributes.dex, 0, 0) : 0,
                        character.armor_class.armor <= 0 ? character.armor_class.base : 0
                      )}
                    </div>
                  </div>

                  <div className="character-sheet-stacked separator">
                    <div className="character-sheet-weapon">{character.attacks.weapon_1}</div>
                    <div className="character-sheet-type">{character.attacks.type_1}</div>
                    <div className="character-sheet-range">{character.attacks.range_1}</div>
                    <div className="character-sheet-damage">{character.attacks.damage_1}</div>
                    <div className="character-sheet-properties">{character.attacks.properties_1}</div>
                  </div>

                  <div className="character-sheet-stacked">
                    <div className="character-sheet-weapon">{character.attacks.weapon_2}</div>
                    <div className="character-sheet-type">{character.attacks.type_2}</div>
                    <div className="character-sheet-range">{character.attacks.range_2}</div>
                    <div className="character-sheet-damage">{character.attacks.damage_2}</div>
                    <div className="character-sheet-properties">{character.attacks.properties_2}</div>
                  </div>

                  <div className="character-sheet-block separator">
                    <div className="character-sheet-money">GP</div>
                    <div className="character-sheet-value">{character.gp}</div>
                    <div className="character-sheet-money">SP</div>
                    <div className="character-sheet-value">{character.sp}</div>
                    <div className="character-sheet-money">CP</div>
                    <div className="character-sheet-value">{character.cp}</div>
                  </div>

                </div>

                <div className="right">

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">Ancestry</div>
                    <div className="character-sheet-value">{character.ancestry}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">Class</div>
                    <div className="character-sheet-value">{character.class}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">Title</div>
                    <div className="character-sheet-value">{character.title}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">Alignment</div>
                    <div className="character-sheet-value">{character.alignment}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">Background</div>
                    <div className="character-sheet-value">{character.background}</div>
                  </div>

                  <div className="character-sheet-block">
                    <div className="character-sheet-prop">Deity</div>
                    <div className="character-sheet-value">{character.deity}</div>
                  </div>

                  <div className="character-sheet-block separator">
                    <TextArea
                      value={
                        details(
                          character.armor_class.properties, 
                          character.talents_spells,
                          character.ancestry_trait
                        )
                      }
                      id="talents-spells"
                      label="Talents / Spells"
                      rows="12"
                      disabled="disabled"
                    />
                  </div>

                </div>

              </Grid>

              <div className="character-sheet-block separator">
                <TextArea
                  value={character.inventory}
                  id="inventory"
                  label="Inventory"
                  rows="12"
                  disabled="disabled"
                />
              </div>

            </div>

          </Grid>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default Character

export const Head: HeadFC = () => (
  <SEO
    title="Character Sheet | Umbral Tools"
    description="Load saved characters up in a simplified overview for table top play."
  />
)
