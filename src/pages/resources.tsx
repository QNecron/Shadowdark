import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import MediaCard from "../components/card/media"

import HeroDesktop from "../images/heroes/16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/1-1.webp"

import MediaImageLarge from "../images/heroes/16-9.webp"
import MediaImage from "../images/heroes/1-1.webp"

const Resources: React.FC<PageProps> = () => {

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
        heading="Resources"
      />

      <Section>

        <Wrapper>

          <Grid desktop="3" tablet="3" mobile="1">

            <MediaCard
              theme="shaded overlay 2-of-3"
              desktop={MediaImageLarge}
              desktopH="1600"
              desktopW="900"
              tablet={MediaImageLarge}
              tabletH="800"
              tabletW="450"
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
              alt="The Dark Emporium's collection of community resources."
              heading="The Dark Emporium"
              copy="A growing collection of commnity created (3pp) resources in one place for the ShadowDark TTRPG system."
              linkClass="btn-link btn-secondary"
              target="_blank"
              url="https://dark-emporium.com/"
              cta="The Dark Emporium"
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
