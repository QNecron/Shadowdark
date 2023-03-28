import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"

import HeroDesktop from "../images/heroes/16-9.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/9-16.webp"

const IndexPage: React.FC<PageProps> = () => {

  return (

    <Page>

      <Hero
        theme="shaded"
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

          <h1 className="heading-3">ShadowDark Toolset</h1>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
