import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"

import Data from "../../json/bestiary.json"

const Bestiary: React.FC<PageProps> = () => {

  return (

    <Page>

      <Hero
        theme="shaded"
        desktop="https://picsum.photos/1600/450"
        desktopH="540"
        desktopW="1920"
        tablet="https://picsum.photos/1024/384"
        tabletH="384"
        tabletW="1024"
        mobile="https://picsum.photos/480/480"
        mobileH="480"
        mobileW="480"
        alt="Shadowdark Hero"
        x="2"
        y="2"
        logo="white"
      />

      <Section>

        <Wrapper>

          <Grid
            desktop="3"
            tablet="3"
            mobile="1"
          >

            {Data.map((data, index) => {


              let alphaFilter = data.name.charAt(0).toLowerCase()
              let levelFilter = data.level

              // alphabetical filter
              // if (alphaFilter !== "a") return null

              // level filter
              // if (levelFilter !== 3) return null

              return(

                <article id={index} className="bestiary-entry" key={index}>

                  <h3 className="bestiary-name">{data.name}</h3>

                  <p className="bestiary-description">{data.description}</p>

                  <div className="bestiary-details">
                    <div><strong>LV:</strong> {data.level}</div>
                    <div><strong>HP:</strong> {data.hitpoints}</div>
                    <div><strong>AC:</strong> {data.armorclass}</div>
                    <div><strong>AL:</strong> {data.alignment}</div>
                    <div><strong>MV:</strong> {data.move}</div>
                  </div>

                  <div className="bestiary-stats">
                    <div><strong>S:</strong> {data.str}</div>
                    <div><strong>D:</strong> {data.dex}</div>
                    <div><strong>C:</strong> {data.con}</div>
                    <div><strong>I:</strong> {data.int}</div>
                    <div><strong>W:</strong> {data.wis}</div>
                    <div><strong>Ch:</strong> {data.cha}</div>
                  </div>

                  <div className="bestiary-attack">{data.attack}</div>

                  {data.ability_1 &&
                    <div className="bestiary-abilities">
                      {data.ability_1 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: data.ability_1}}></div> : ""}
                      {data.ability_2 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: data.ability_2}}></div> : ""}
                      {data.ability_3 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: data.ability_3}}></div> : ""}
                      {data.ability_4 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: data.ability_4}}></div> : ""}
                      {data.ability_5 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: data.ability_5}}></div> : ""}
                    </div>
                  }

                  {data.spell_1 &&
                    <div className="bestiary-spells">
                      {data.spell_1 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: data.spell_1}}></div> : ""}
                      {data.spell_2 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: data.spell_2}}></div> : ""}
                      {data.spell_3 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: data.spell_3}}></div> : ""}
                      {data.spell_4 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: data.spell_4}}></div> : ""}
                      {data.spell_5 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: data.spell_5}}></div> : ""}
                    </div>
                  }

                </article>

              )

            })}

          </Grid>

        </Wrapper>

      </Section>

    </Page>

  )

}

export default Bestiary

export const Head: HeadFC = () => <title>Bestiary</title>
