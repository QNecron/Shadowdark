import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import NavFlyout from "../components/nav/nav-flyout"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import Icon from "../components/icon/icon"
import Input from "../components/forms/input"
import SpellCard from "../components/card/spell"
import Tabs from "../components/tabs/tabs"

import Alphabet from "../../json/alphabet.json"
import Numeric from "../../json/tier.json"
import Sources from "../../json/sources.json"
import Casters from "../../json/casters.json"

import Core from "../../json/spells_core.json"
import Custom from "../../json/spells_custom.json"

import HeroDesktop from "../images/heroes/16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/1-1.webp"

const Spells: React.FC<PageProps> = () => {

  const [alpha, alphaUpdate] = useState("*")
  const [level, levelUpdate] = useState("*")
  const [source, sourceUpdate] = useState("*")
  const [caster, casterUpdate] = useState("*")
  const [search, searchUpdate] = useState("")
  const [submit, submitUpdate] = useState("")

  const form = (e, prop) => {
    e.preventDefault()
    submitUpdate(prop)
  }

  const clear = (prop) => {
    searchUpdate(prop)
    submitUpdate(prop)
  }

  const Data = Core.concat(Custom)

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
        heading="Spells"
      >
        {/* @TODO make a search component */}
        <form className="search" onSubmit={(e) => form(e, search)}>
          <button type="button" className="btn-icon btn-primary" onClick={(e) => submitUpdate(search)}>
            <span className="srt">Search</span>
            <Icon icon="search" />
          </button>
          <Input
            type="search"
            value={search}
            id="search"
            srt="true"
            label="Search"
            change={(e) => searchUpdate(e.target.value)}
          />
          <button type="reset" className="btn-icon btn-primary" onClick={(e) => clear("")}>
            <span className="srt">Clear</span>
            <Icon icon="close" />
          </button>
        </form>
      </Hero>

      <Section theme="bot">

        <Wrapper>

          <nav className="filters" aria-label="Bestiary Filters" role="navigation">

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
                <h5 className="filters-heading heading-5">Name</h5>
              </Tabs>

              <Tabs
                data={Casters}
                state={caster}
                click={casterUpdate}
                tabClass="filters-casters"
              >
                <h5 className="filters-heading heading-5">Class</h5>
              </Tabs>

              <Tabs
                data={Numeric}
                state={level}
                click={levelUpdate}
                tabClass="filters-numeric"
              >
                <h5 className="filters-heading heading-5">Tier</h5>
              </Tabs>

              <Tabs
                data={Sources}
                state={source}
                click={sourceUpdate}
                tabClass="filters-source"
              >
                <h5 className="filters-heading heading-5">Source</h5>
              </Tabs>

            </NavFlyout>

          </nav>

          <Grid desktop="3" tablet="3" mobile="1">

            {Data.sort((a, b) => a.name < b.name ? -1 : 1).map((data, index) => {

              let alphaFilter = data.name.charAt(0)
              let casterFilter = data.class
              let levelFilter = data.tier
              let sourceFilter = data.source
              let submitFilter = submit.toLowerCase()
              let nameFilter = data.name.toLowerCase()

              // alphabetical filter
              if (alphaFilter !== alpha && alpha !== "*") return null

              // caster filter
              if (casterFilter.includes(caster) === false && caster !== "*") return null

              // level filter
              if (levelFilter !== level && level !== "*") return null

              // source filter
              if (sourceFilter !== source && source !== "*") return null

              // search filter
              if (submit) {

                if (submitFilter.substring(0, 3) !== nameFilter.substring(0, 3)) return null

              }

              return (

                <SpellCard
                  key={index}
                  source={data.source}
                  name={data.name}
                  tier={data.tier}
                  class={data.class}
                  duration={data.duration}
                  range={data.range}
                  description_1={data.description_1}
                  description_2={data.description_2}
                  description_3={data.description_3}
                />

              )

            })}

          </Grid>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default Spells

export const Head: HeadFC = () => (
  <SEO
    title="Name Here | Spells"
    description="Search through all openly available spells for ShadowDark TTRPG."
  />
)
