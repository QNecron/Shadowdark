import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
// import { Link } from "gatsby"

import SEO from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"
import Grid from "../components/grid/grid"
import Icon from "../components/icon/icon"
import Input from "../components/forms/input"
import Select from "../components/forms/select"

import Weapons from "../json/weapons.json"

import { weapons } from "../utilities/functions"

import HeroDesktop from "../images/heroes/default_16-4-5.webp"
// import HeroTablet from "../images/heroes/16-9.webp"
import HeroMobile from "../images/heroes/default_1-1.webp"

const Combat: React.FC<PageProps> = () => {

  const [combat, combatUpdate] = useState({
    weapon: "None",
    weapon_damage: "0",
    weapon_damage_1: "0",
    weapon_damage_2: "0",
    weapon_hands: 5,
    enhancement: 0,
    class: "",
    feats: 0,
    magical_1: "",
    magical_1_type: "",
    magical_2: "",
    magical_2_type: "",
    magical_3: "",
    magical_3_type: ""
  })

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
        heading="Combat"
      />

      <Section>

        <Wrapper>

          <Grid desktop="2" tablet="2" mobile="1" gap="32">

            <div className="left">

              <h2 className="creator-heading heading-3">Weapon</h2>

              <div className="creator-block">
                <Select
                  value={combat.weapon}
                  id="weapon"
                  label="Weapon"
                  helper="Weapon"
                  srt="true"
                  change={(e) => combatUpdate({
                    ...combat,
                    weapon: e.target.value,
                    weapon_damage: weapons(Weapons, e.target.value, 3),
                    weapon_damage_1: weapons(Weapons, e.target.value, 5),
                    weapon_damage_2: weapons(Weapons, e.target.value, 6)
                  })}
                >
                  <option value="None">None</option>
                  {Weapons.map((data, index) => {
                    return (
                      <option
                        key={index}
                        value={data.name}
                        type={data.type}
                        range={data.range}
                        damage={data.damage}
                        damage_1={data.damage_1}
                        damage_2={data.damage_2}
                        properties={data.properties}
                      >
                        {data.name}
                      </option>
                    )
                  })}
                </Select>

                <Select
                  value={combat.weapon_hands}
                  id="hands"
                  label="One Handed / Two Handed"
                  helper="One / Two Hands"
                  srt="true"
                  disabled={combat.weapon !== "Bastard Sword" && combat.weapon !== "Greataxe" ? true : false}
                  change={(e) => combatUpdate({
                    ...combat,
                    weapon_hands: parseInt(e.target.value)
                  })}
                >
                  <option value="5">One Handed</option>
                  <option value="6">Two Handed</option>
                </Select>
              </div>

              <div className="creator-block">
                <Input
                  type="number"
                  value={combat.enhancement}
                  id="enhancement"
                  label="Enhancement"
                  helper="Enhancement"
                  srt="true"
                  min="0"
                  max="3"
                  change={(e) => combatUpdate({
                    ...combat,
                    enhancement: e.target.value
                  })}
                />

                <Input
                  type="text"
                  value={combat.class}
                  id="enhancement"
                  label="Class Bonus"
                  helper="Class Bonus"
                  srt="true"
                  change={(e) => combatUpdate({
                    ...combat,
                    class: e.target.value
                  })}
                />

                <Input
                  type="number"
                  value={combat.feats}
                  id="feats"
                  label="Feats"
                  helper="Feats"
                  srt="true"
                  min="-5"
                  max="5"
                  change={(e) => combatUpdate({
                    ...combat,
                    feats: e.target.value
                  })}
                />
              </div>

              <div className="creator-block">
                <Input
                  type="text"
                  value={combat.magical_1}
                  id="magicalBonus1"
                  label="Magical Bonus (1)"
                  helper="Magical Bonus (1)"
                  srt="true"
                  change={(e) => combatUpdate({
                    ...combat,
                    magical_1: e.target.value
                  })}
                />

                <Select
                  value={combat.magical_1_type}
                  id="magicalType1"
                  label="Magical Type (1)"
                  helper="Magical Type (1)"
                  srt="true"
                  change={(e) => combatUpdate({
                    ...combat,
                    magical_1_type: e.target.value
                  })}
                >
                  <option value=""></option>
                  <option value="Acid">Acid</option>
                  <option value="Cold">Cold</option>
                  <option value="Electrical">Eletrical</option>
                  <option value="Fire">Fire</option>
                </Select>
              </div>

              <div className="creator-block">
                <Input
                  type="text"
                  value={combat.magical_2}
                  id="magicalBonus2"
                  label="Magical Bonus (2)"
                  helper="Magical Bonus (2)"
                  srt="true"
                  change={(e) => combatUpdate({
                    ...combat,
                    magical_2: e.target.value
                  })}
                />

                <Select
                  value={combat.magical_2_type}
                  id="magicalType2"
                  label="Magical Type (2)"
                  helper="Magical Type (2)"
                  srt="true"
                  change={(e) => combatUpdate({
                    ...combat,
                    magical_2_type: e.target.value
                  })}
                >
                  <option value=""></option>
                  <option value="Acid">Acid</option>
                  <option value="Cold">Cold</option>
                  <option value="Electrical">Eletrical</option>
                  <option value="Fire">Fire</option>
                </Select>
              </div>

              <div className="creator-block">
                <Input
                  type="text"
                  value={combat.magical_3}
                  id="magicalBonus3"
                  label="Magical Bonus (3)"
                  helper="Magical Bonus (3)"
                  srt="true"
                  change={(e) => combatUpdate({
                    ...combat,
                    magical_3: e.target.value
                  })}
                />

                <Select
                  value={combat.magical_3_type}
                  id="magicalType3"
                  label="Magical Type (3)"
                  helper="Magical Type (3)"
                  srt="true"
                  change={(e) => combatUpdate({
                    ...combat,
                    magical_3_type: e.target.value
                  })}
                >
                  <option value=""></option>
                  <option value="Acid">Acid</option>
                  <option value="Cold">Cold</option>
                  <option value="Electrical">Eletrical</option>
                  <option value="Fire">Fire</option>
                </Select>
              </div>

            </div>

            <div className="right">

              <h2 className="creator-heading heading-3">Calculations</h2>

              <div className="creator-block">
             		<p>Calculation format for Roll20. Replace the **Weapon** with an item's true name or a name you've given the weapon.</p>
              </div>

              <div className="creator-block">

                <div id="weaponDamage" className="creator-damage">

                  {combat.weapon ? `**` + combat.weapon + `**: `: ""}

                  {combat.weapon_hands === 3 ?
                    <span className="weapon-name">{`[[` + combat.weapon_damage}</span>
                  : ""}

                  {combat.weapon_hands === 5 ?
                    <span className="weapon-name">{`[[` + combat.weapon_damage_1}</span>
                  : ""}

                  {combat.weapon_hands === 6 ?
                    <span className="weapon-name">{`[[` + combat.weapon_damage_2}</span>
                  : ""}

                  <span className="weapon-enhancement">
                    {combat.enhancement ? ` + ` + combat.enhancement : ""}
                  </span>

                  <span className="weapon-class">
                    {combat.class ? ` + ` + combat.class : ""}
                  </span>

                  <span className="weapon-feats">
                    {` + ` + combat.feats + `]]`}
                  </span>

                  <span className="weapon-magical">
                    {combat.magical_1 ? ` + ([[` + combat.magical_1 + `]]` : ""}
                    {combat.magical_1_type ?
                      <span className={combat.magical_1_type.toLowerCase()}>
                        {` ` + combat.magical_1_type + `)`}
                      </span>
                    : ""}
                  </span>

                  <span className="weapon-magical">
                    {combat.magical_2 ? ` + ([[` + combat.magical_2 + `]]` : ""}
                    {combat.magical_2_type ?
                      <span className={combat.magical_2_type.toLowerCase()}>
                        {` ` + combat.magical_2_type + `)`}
                      </span>
                    : ""}
                  </span>

                  <span className="weapon-magical">
                    {combat.magical_3 ? ` + ([[` + combat.magical_3 + `]]` : ""}
                    {combat.magical_3_type ?
                      <span className={combat.magical_3_type.toLowerCase()}>
                        {` ` + combat.magical_3_type + `)`}
                      </span>
                    : ""}
                  </span>

                </div>

                <div className="creator-dice">
									<button className="btn-icon btn-primary" onClick={(e) => navigator.clipboard.writeText(document.getElementById("weaponDamage").innerText)}>
                    <span className="srt">Copy to clipboard</span>
                    <Icon icon="copy" />
                  </button>
                </div>

              </div>

            </div>

          </Grid>

        </Wrapper>

      </Section>

    </Page>

)

}

export default Combat

export const Head: HeadFC = () => (
  <SEO
  title="Combat | Umbral Tools"
  description="Custom Roll20 combat widget creator for ShadowDark campaigns."
  />
)
