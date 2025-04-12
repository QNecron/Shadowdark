import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Dialog from "../components/dialog/dialog"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import Icon from "../components/icon/icon"
import Input from "../components/forms/input"
import FeatCard from "../components/card/feat"
import Tabs from "../components/tabs/tabs"

import Alphabet from "../json/alphabet.json"

import Data from "../json/feats.json"

import HeroDesktop from "../images/heroes/default_16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/default_1-1.webp"

const Spells: React.FC<PageProps> = () => {

  const Type = ["general", "combat", "magical", "*"]

  const [alpha, alphaUpdate] = useState("*")
  const [search, searchUpdate] = useState("")
  const [type, typeUpdate] = useState("*")
  const [submit, submitUpdate] = useState("")

  const form = (e, prop) => {
    e.preventDefault()
    submitUpdate(prop)
    alphaUpdate("*")
    typeUpdate("*")
  }

  const clear = (prop) => {
    searchUpdate(prop)
    submitUpdate(prop)
  }

  return (

    <Page>

      <Hero
        theme="greyscale"
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
        heading="Feats"
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
            placeholder="Feat Name"
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

            <Dialog
              btnClass="btn btn-primary"
              btnCopy="Filters"
              dialogType="nav-secondary"
              dialogId="filters"
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
                data={Type}
                state={type}
                click={typeUpdate}
                tabClass="filters-type"
              >
                <h5 className="filters-heading heading-5">Type</h5>
              </Tabs>

            </Dialog>

          </nav>

          <Grid desktop="2" tablet="2" mobile="1">

            {Data.sort((a, b) => a.name < b.name ? -1 : 1).map((data, index) => {

              let alphaFilter = data.name.charAt(0)
              let submitFilter = submit.toLowerCase()
              let nameFilter = data.name.toLowerCase()
              let typeFilter = data.type

              // alphabetical filter
              if (alphaFilter !== alpha && alpha !== "*") return null

              // type filter
              if (typeFilter !== type && type !== "*") return null

              // search filter
              if (submit) {

                if (submitFilter.substring(0, 3) !== nameFilter.substring(0, 3)) return null

              }

              return (

                <FeatCard 
                  key={index}
                  name={data.name}
                  description={data.description}
                  action={data.action}
                  type={data.type}
                  stacking={data.stacking}
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
    title="Feats | Umbral Tools"
    description="Search through all openly available feats for ShadowDark TTRPG."
  />
)
