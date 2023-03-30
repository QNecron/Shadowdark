import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import MediaCard from "../components/card/media"

import HeroDesktop from "../images/heroes/16-9.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/9-16.webp"

import MediaImage from "../images/heroes/1-1.webp"

const IndexPage: React.FC<PageProps> = () => {

  return (

    <Page>

      <Hero
        theme="large shaded"
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
        logo="white"
      />

      <Section>

        <Wrapper>

          {/* @TODO - abstract heading into Section component */}
          <h1 className="section-heading heading-3">[Name Here]</h1>

          <Grid desktop="3" tablet="3" mobile="1">

            <MediaCard
              theme="shaded overlay"
              desktop={MediaImage}
              desktopH="480"
              desktopW="480"
              tablet={MediaImage}
              tabletH="480"
              tabletW="480"
              mobile={MediaImage}
              mobileH="480"
              mobileW="480"
              alt="The Arcane Library's ShadowDark"
              heading="ShadowDark"
              copy="Shadowdark RPG is what old-school fantasy gaming would look like after being redesigned with 50 years of innovation. "
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
    title="Name Here | Home"
    description="Tool set for the ShadowDark TTRP created by The Arcane Light."
  />
)
