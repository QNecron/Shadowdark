import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import MediaCard from "../components/card/media"

import HeroDesktop from "../images/heroes/default_16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/default_1-1.webp"

import ShadowdarkImage from "../images/heroes/shadowdark_rulebook.webp"

const Resources: React.FC<PageProps> = () => {

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
        loading="eager"
        priority="high"
        x="2"
        y="2"
        heading="Resources"
      />

      <Section>

        <Wrapper>

          <Grid desktop="3" tablet="3" mobile="1">

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
              copy="Support the amazing creator of Shadowdark over at The Arcane Libra"
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

export default Resources

export const Head: HeadFC = () => (
  <SEO
    title="Resources | Umbral Tools"
    description="Additional commnuity driven 3pp reources for ShadowDark."
  />
)
