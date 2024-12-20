import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import MediaCard from "../components/card/media"
import Accordion from "../components/accordion/accordion"

import HeroDesktop from "../images/heroes/default_16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/default_1-1.webp"

const Codex: React.FC<PageProps> = () => {

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
        heading="Codex"
      />
      
      <Section>

        <Wrapper>
        
          <Grid desktop="codex" tablet="codex" mobile="1">
          
            <div className="page-nav">
              
              <a href="#leveling" className="btn btn-primary">Leveling</a>
              
            </div>
            
            <div className="page">
              
              <Accordion 
                id="leveling"
                classes="codex"
                title="Leveling"
                content="Information about leveling."
              />
              
            </div>
          
          </Grid>
        
        </Wrapper>
          
      </Section>
          
    </Page>

  )

}

export default Codex

export const Head: HeadFC = () => (
<SEO
  title="Codex | Umbral Tools"
  description="Alternative rules and information for ongoing campaigns."
/>
)      