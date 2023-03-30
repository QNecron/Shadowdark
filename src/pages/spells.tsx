import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import NavFlyout from "../components/nav/nav-flyout"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import SpellCard from "../components/card/spell"

import Alphabet from "../../json/alphabet.json"
import Sources from "../../json/sources.json"

import Core from "../../json/spells_core.json"
import Custom from "../../json/spells_custom.json"

import HeroDesktop from "../images/heroes/16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/1-1.webp"

const Spells: React.FC<PageProps> = () => {

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
      />

      <Section theme="bot">

        <Wrapper>

          <nav className="filters" aria-label="Bestiary Filters" role="navigation">

            <NavFlyout
              btnClass="btn btn-primary"
              btnCopy="Filters"
              navId="filters"
              navClass="nav-secondary"
            >

            </NavFlyout>

          </nav>

          <Grid desktop="3" tablet="3" mobile="1">

            {Data.sort((a, b) => a.Name > b.Name ? -1 : 1).map((data, index) => {

              return (

                <SpellCard
                  key={index}
                  source={data.source}
                  name={data.name}
                  description={data.description}
                  tier={data.tier}
                  class={data.class}
                  duration={data.duration}
                  range={data.range}
                  helper_1={data.helper_1}
                  helper_2={data.helper_2}
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
