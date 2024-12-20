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
import MediaFeats from "../images/heroes/feats_1-1.webp"
import ShadowdarkImage from "../images/heroes/shadowdark_rulebook.webp"

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
              desktop={MediaFeats}
              desktopH="480"
              desktopW="480"
              tablet={MediaFeats}
              tabletH="480"
              tabletW="480"
              mobile={MediaFeats}
              mobileH="480"
              mobileW="480"
              alt="Custom feats for Shadowdark."
              heading="Learn New Feats"
              copy="Alternative rules that add feats for your characters to learn at even levels."
              linkClass="btn-link btn-secondary"
              url="/feats"
              cta="Character Feats"
            />

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
              alt="Custom feats for Shadowdark."
              heading="Create Characters"
              copy="Create, save, modify, and delete characters as needed."
              linkClass="btn-link btn-secondary"
              url="/creator"
              cta="Character Creator"
            />

            <MediaCard
              theme="greyscale overlay"
              desktop={ShadowdarkImage}
              desktopH="480"
              desktopW="480"
              tablet={ShadowdarkImage}
              tabletH="480"
              tabletW="480"
              mobile={ShadowdarkImage}
              mobileH="480"
              mobileW="480"
              alt="The Arcane Library's Shadowdark"
              heading="Shadowdark"
              copy="Support the amazing creator of Shadowdark over at The Arcane Library."
              linkClass="btn-link btn-secondary"
              target="_blank"
              url="https://www.thearcanelibrary.com/pages/shadowdark"
              cta="The Arcane Library"
            />

          </Grid>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO
    title="Umbral Tools"
    description="Tool set for the ShadowDark TTRP created by The Arcane Light."
  />
)
