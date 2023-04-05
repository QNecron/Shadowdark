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
import Sources from "../../json/sources.json"

import Core from "../../json/items_core.json"
import Custom from "../../json/items_custom.json"

import HeroDesktop from "../images/heroes/16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/1-1.webp"

const Spells: React.FC<PageProps> = () => {

  const [alpha, alphaUpdate] = useState("*")
  const [source, sourceUpdate] = useState("*")
  const [search, searchUpdate] = useState("")
  const [submit, submitUpdate] = useState("")

  const form = (e, prop) => {
    e.preventDefault()
    submitUpdate(prop)
    alphaUpdate("*")
    sourceUpdate("*")
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
        heading="Magical Items"
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
            placeholder="Spell Name"
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
              let sourceFilter = data.source
              let submitFilter = submit.toLowerCase()
              let nameFilter = data.name.toLowerCase()

              // alphabetical filter
              if (alphaFilter !== alpha && alpha !== "*") return null

              // source filter
              if (sourceFilter !== source && source !== "*") return null

              // search filter
              if (submit) {

                if (submitFilter.substring(0, 3) !== nameFilter.substring(0, 3)) return null

              }

              return (

                <div className="item-card" key={index} hidden>

                  <div className="item-card-name">{data.name}</div>

                  <div className="item-card-description">{data.description}</div>

                  <div className="item-card-benefit" dangerouslySetInnerHTML={{__html: data.benefit}}></div>

                  {data.curse ? <div className="item-card-benefit" dangerouslySetInnerHTML={{__html: data.curse}}></div> : ""}

                </div>

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
    title="Spells | Umbral Tools"
    description="Search through all openly available spells for ShadowDark TTRPG."
  />
)
