import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import MediaCard from "../components/card/media"

import HeroDesktop from "../images/heroes/tar-baphon_arazni_16-9.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/tar-baphon_arazni_9-16.webp"

import MediaCharacter from "../images/heroes/characters_1-1.webp"
import MediaCodex from "../images/heroes/default_1-1.webp"
import MediaCombat from "../images/heroes/feats_1-1.webp"

import HeroItemsDesktop from "../images/heroes/default_16-4-5.webp"
import HeroItemsMobile from "../images/heroes/default_1-1.webp"

const IndexPage: React.FC<PageProps> = () => {

  return (

    <Page>

      <Hero
        theme="greyscale"
        desktop={HeroDesktop}
        desktopH="1080"
        desktopW="1920"
        tablet={HeroDesktop}
        tabletH="768"
        tabletW="1024"
        mobile={HeroMobile}
        mobileH="960"
        mobileW="480"
        alt="Shadowdark Hero"
        loading="auto"
        x="2"
        y="2"
        heading="Umbral Tools"
        logo="white"
      />

      <Section>

        <Wrapper>

          <Grid desktop="3" tablet="3" mobile="1">
            
            <MediaCard
              theme="greyscale overlay"
              desktop={MediaCharacter}
              desktopH="480"
              desktopW="480"
              tablet={MediaCharacter}
              tabletH="480"
              tabletW="480"
              mobile={MediaCharacter}
              mobileH="480"
              mobileW="480"
              alt="Custom feats for ShadowDark."
              heading="Create Characters"
              copy="Create, save, modify, and delete characters as needed. Planned or completely random."
              linkClass="btn-link btn-secondary"
              url="/creator"
              cta="Character Creator"
            />
            
            <MediaCard
              theme="greyscale overlay"
              desktop={MediaCodex}
              desktopH="480"
              desktopW="480"
              tablet={MediaCodex}
              tabletH="480"
              tabletW="480"
              mobile={MediaCodex}
              mobileH="480"
              mobileW="480"
              alt="Custom rules for ShadowDark."
              heading="Homebrew Rules"
              copy="Homebrew rules for upcoming campaigns. Class changes, spell changes, and more."
              linkClass="btn-link btn-secondary"
              url="/codex"
              cta="Codex of Updates"
            />

            <MediaCard
              theme="greyscale overlay"
              desktop={MediaCombat}
              desktopH="480"
              desktopW="480"
              tablet={MediaCombat}
              tabletH="480"
              tabletW="480"
              mobile={MediaCombat}
              mobileH="480"
              mobileW="480"
              alt="Roll20 compatible marco creator."
              heading="Combat Made Easy"
              copy="Combat tools for generating Roll20 compatible macros with ease."
              linkClass="btn-link btn-secondary"
              url="/combat"
              cta="Combat Tools"
            />

          </Grid>

        </Wrapper>

      </Section>
      
      <Hero
        theme="greyscale"
        desktop={HeroItemsDesktop}
        desktopH="1080"
        desktopW="1920"
        tablet={HeroItemsDesktop}
        tabletH="768"
        tabletW="1024"
        mobile={HeroItemsMobile}
        mobileH="960"
        mobileW="480"
        alt="Custom magic items to discover and wield."
        loading="auto"
        x="2"
        y="2"
        heading="Magical Treasures"
        copy="Find and wield powerful magical items."
        linkClass="btn-link btn-secondary"
        link="/items"
        cta="Magic Items"
      />
      
    </Page>

  )

}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO
    title="Umbral Tools"
    description="Toolset for the ShadowDark TTRPG created by The Arcane Light."
  />
)
