import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import NavFlyout from "../components/nav/nav-flyout"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import Input from "../components/forms/input"
import TextArea from "../components/forms/textarea"

// import Data from "../../json/bestiary.json"

import { modifier, total } from "../utilities/functions"

const Creator: React.FC<PageProps> = () => {

  const [character, characterUpdate] = useState({
    name: "",
    attributes: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    },
    hit_points: 0,
    armor_class: {
      base: 10,
      armor: 0,
      shield: 0
    }
  })

  return (

    <Page>

      <Hero
        theme="shaded"
        desktop="https://picsum.photos/1600/450"
        desktopH="540"
        desktopW="1920"
        tablet="https://picsum.photos/1024/384"
        tabletH="384"
        tabletW="1024"
        mobile="https://picsum.photos/480/480"
        mobileH="480"
        mobileW="480"
        alt="Shadowdark Hero"
        x="2"
        y="2"
        heading="Creator"
      />

      <Section theme="bot">

        <Wrapper>

          <nav className="filters" aria-label="Saved Characters" role="navigation">

            <NavFlyout
              btnClass="btn btn-primary"
              btnCopy="Unknown"
              navId="unknown"
              navClass="nav-secondary"
            >
              Character Data
            </NavFlyout>

          </nav>

          <Grid desktop="2" tablet="2" mobile="1">

            <div>

              <div className="creator-block">
                <h2 className="creator-heading heading-5">Str</h2>
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
              </div>

              <div className="creator-block">
                <h2 className="creator-heading heading-5">Dex</h2>
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
              </div>

              <div className="creator-block">
                <h2 className="creator-heading heading-5">Con</h2>
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
              </div>

              <div className="creator-block">
                <h2 className="creator-heading heading-5">Int</h2>
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
              </div>

              <div className="creator-block">
                <h2 className="creator-heading heading-5">Wis</h2>
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
              </div>

              <div className="creator-block">
                <h2 className="creator-heading heading-5">Cha</h2>
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
              </div>

              <div className="creator-block">
                <h2 className="creator-heading heading-5">AC</h2>
                <div className="creator-total">
                  {total(
                    character.armor_class.base,
                    character.armor_class.armor,
                    character.armor_class.shield,
                    modifier(character.attributes.dex, 0, 0)
                  )}
                </div>
                <Input
                  type="number"
                  value={character.armor_class.armor}
                  id="armor"
                  label="Armor"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    armor_class: {
                      ...character.armor_class,
                      armor: e.target.value
                    }
                  })}
                />
                <Input
                  type="number"
                  value={character.armor_class.shield}
                  id="shield"
                  label="Shield"
                  srt="true"
                  change={(e) => characterUpdate({
                    ...character,
                    armor_class: {
                      ...character.armor_class,
                      shield: e.target.value
                    }
                  })}
                />
              </div>

            </div>

            <div>
              <Input type="number" id="hp" label="Hit Points" />
              <TextArea id="attacks" label="Attacks" rows="4" />
              <Input id="name" label="Name" />
              <Input id="ancestry" label="Ancestry" />
              <Input id="class" label="Class" />
              <Input type="number" id="level" label="Level" />
              <Input type="number" id="xp" label="Experience" />
              <Input id="alignment" label="Alignment" />
              <Input id="title" label="Title" />
              <Input id="background" label="Background" />
              <Input id="deity" label="Deity" />
              <TextArea id="talentsspells" label="Talents/Spells" rows="12" />
              <Input type="number" id="gp" label="Gold Pieces" />
              <Input type="number" id="sp" label="Silver Pieces" />
              <Input type="number" id="cp" label="Copper Pieces" />
            </div>

          </Grid>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default Creator

export const Head: HeadFC = () => <title>Creator</title>
