import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"

// import Data from "../../json/bestiary.json"

import HeroDesktop from "../images/heroes/16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/1-1.webp"

const Spells: React.FC<PageProps> = () => {

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

      <Section>

        <Wrapper>

          <h2 className="heading-3">Coming soon..</h2>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default Spells

export const Head: HeadFC = () => <title>Spells</title>
