import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import NavFlyout from "../components/nav/nav-flyout"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import BestiaryCard from "../components/card/bestiary"
import Tabs from "../components/tabs/tabs"

import Alphabet from "../../json/alphabet.json"
import Numeric from "../../json/numeric.json"
import Sources from "../../json/sources.json"

import Core from "../../json/bestiary_core.json"
import Custom from "../../json/bestiary_custom.json"

const Bestiary: React.FC<PageProps> = () => {

  const [alpha, alphaUpdate] = useState("*")
  const [level, levelUpdate] = useState("*")
  const [source, sourceUpdate] = useState("*")

  const Data = Core.concat(Custom)

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

      <Wrapper classes="filter-wrapper">

        <nav className="filter" aria-label="Bestiary Filters" role="navigation">

          <NavFlyout
            btnClass="btn btn-primary"
            btnCopy="Filters"
            navId="filters"
            navClass="nav-secondary"
          >

            <Tabs
              data={Alphabet}
              state={alpha}
              click={alphaUpdate}
              tabClass="filters-alpha"
            >
              <h5 className="filter-heading">Name</h5>
            </Tabs>

            <Tabs
              data={Numeric}
              state={level}
              click={levelUpdate}
              tabClass="filters-numeric"
            >
              <h5 className="filter-heading">Level</h5>
            </Tabs>

            <Tabs
              data={Sources}
              state={source}
              click={sourceUpdate}
              tabClass="filters-source"
            >
              <h5 className="filter-heading">Source</h5>
            </Tabs>

          </NavFlyout>

        </nav>

      </Wrapper>

      <Section theme="bot">

        <Wrapper>

          <Grid desktop="3" tablet="3" mobile="1">

            {Data.map((data, index) => {

              let alphaFilter = data.name.charAt(0)
              let levelFilter = data.level
              let sourceFilter = data.source

              // alphabetical filter
              if (alphaFilter !== alpha && alpha !== "*") return null

              // level filter
              if (levelFilter !== level && level !== "*") return null

              // source filter
              if (sourceFilter !== source && source !== "*") return null

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
