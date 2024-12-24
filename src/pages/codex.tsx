import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"

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
              
              <nav aria-label="Codex Highlights" role="navigation">
                
                <ul>
                  <li><a href="#classes" className="link">Classes</a></li>
                  <li><a href="#leveling" className="link">Leveling</a></li>
                  <li><a href="#actions" className="link">Actions</a></li>
                  <li><a href="#items" className="link">Inventory Slots</a></li>
                  <li><a href="#damage" className="link">Damage Types</a></li>
                </ul>
                
              </nav>
              
            </div>
            
            <div className="page">

              <Accordion 
                id="classes"
                classes="codex"
                trigger="btn btn-primary"
                title="Classes"
                open="true"
              >
                
                <p>The following classes are available to choose from for ShadowDark campaigns:</p>
                
                <ul>
                  <li>Fighter</li>
                  <li>Priest</li>
                  <li>Thief</li>
                  <li>Wizard</li>
                  <li>Bard</li>
                  <li>Ranger</li>
                  <li>Vanguard <strong>[Knight of St. Ydris]</strong></li>
                  <li>Warlock</li>
                  <li>Witch</li>
                </ul>
                
              </Accordion>

              <Accordion 
                id="leveling"
                classes="codex"
                trigger="btn btn-primary"
                title="Leveling"
              >
                
                <p>Leveling will follow the ShadowDark ruleset except for the following:</p>
                
                <ul>
                  <li>At first level players will recieve the maximum hit points possible.</li>
                  <li>On even levels players gain a <Link className="link" to="/feats">Feat</Link>.</li>
                </ul>
                
              </Accordion>
              
              <Accordion 
                id="actions"
                classes="codex"
                trigger="btn btn-primary"
                title="Actions"
              >
                
                <p>Clarification on actions a player could choose to do on their turn:</p>
                
                <ul>
                  <li>Knowledge checks are a free action within reason.</li>
                  <li>Perception; seeing, hearing, and smelling, checks are a free action within reason.</li>
                  <li>Swapping weapons is a free action.</li>
                </ul>
                
              </Accordion>
              
              <Accordion 
                id="items"
                classes="codex"
                trigger="btn btn-primary"
                title="Inventory Slots"
              >
                
                <p>In addition to the 10 starting inventory slots players will also have:</p>
                
                <ul>
                  <li><strong>[Head]</strong> Circlets, Headbands, Helmets, Hoods, and Masks</li>
                  <li><strong>[Back]</strong> Capes, Cloaks, and Mantles</li>
                  <li><strong>[Neck]</strong> Amulets, Broaches, and Necklaces</li>
                  <li><strong>[Body]</strong> Armor and Robes</li>
                  <li><strong>[Arms]</strong> Gauntlets, Gloves, and Vambraces</li>
                  <li><strong>[Heands]</strong> Weapons and Shields</li>
                  <li><strong>[Accessories]</strong> Bracelets, Rings, and Torcs</li>
                  <li><strong>[Waist]</strong> Belts and Sashes</li>
                  <li><strong>[Feet]</strong> Boots, Sandles, and Sabatons</li>
                </ul>
                
              </Accordion>
              
              <Accordion 
                id="damage"
                classes="codex"
                trigger="btn btn-primary"
                title="Damage Types"
              >
              
                <p>Damage types defined:</p>
                
                <ul>
                  <li><strong>[Physical]</strong> Bludgeoning, Piercing, and Slashing</li>
                  <li><strong>[Elemental]</strong> Acid, Cold, Electrical, and Fire</li>
                  <li><strong>[Foundational]</strong> Force, Light, and Shadow</li>
                </ul>
                
              </Accordion>
              
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