import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import BestiaryCard from "../components/card/bestiary"

import Data from "../../json/bestiary.json"

const Bestiary: React.FC<PageProps> = () => {

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
        logo="white"
      />

      <Section>

        <Wrapper>

          <Grid desktop="3" tablet="3" mobile="1">

            {Data.map((data, index) => {

              let alphaFilter = data.name.charAt(0).toLowerCase()
              let levelFilter = data.level
              let sourceFilter = data.source

              // alphabetical filter
              // if (alphaFilter !== "a") return null

              // level filter
              // if (levelFilter !== 3) return null

              // source filter
              // if (sourceFilter !== "core") return null

              return(

                <BestiaryCard
                  key={index}
                  source={data.source}
                  name={data.name}
                  description={data.description}
                  level={data.level}
                  hitpoints={data.hitpoints}
                  armorclass={data.armorclass}
                  alignment={data.alignment}
                  move={data.move}
                  str={data.str}
                  dex={data.dex}
                  con={data.con}
                  int={data.int}
                  wis={data.wis}
                  cha={data.cha}
                  attack={data.attack}
                  ability_1={data.ability_1}
                  ability_2={data.ability_2}
                  ability_3={data.ability_3}
                  ability_4={data.ability_4}
                  ability_5={data.ability_5}
                  spell_1={data.spell_1}
                  spell_2={data.spell_2}
                  spell_3={data.spell_3}
                  spell_4={data.spell_4}
                  spell_5={data.spell_5}
                />

              )

            })}

          </Grid>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default Bestiary

export const Head: HeadFC = () => <title>Bestiary</title>
