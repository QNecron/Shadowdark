import * as React from "react"

import NavFlyout from "../nav/nav-flyout"

const BestiaryCard = ({ ...props }) => {

  const spellBook = props.name.toLowerCase().replaceAll(' ', '')
  
  return (
    <article className={`bestiary-card${props.source ? " "+props.source : ""}`} key={props.key}>

      <h2 className="bestiary-name heading-3">{props.name}</h2>

      <p className="bestiary-description">{props.description}</p>

      <div className="bestiary-level">{props.level}</div>

      <div className="bestiary-details">
        <div className="bestiary-detail"><strong>HP:</strong> {props.hitpoints}</div>
        <div className="bestiary-detail"><strong>AC:</strong> {props.armorclass}</div>
        <div className="bestiary-detail"><strong>AL:</strong> {props.alignment}</div>
        <div className="bestiary-detail"><strong>MV:</strong> {props.move}</div>
      </div>

      <div className="bestiary-stats">
        <div className="bestiary-stat"><strong>S:</strong> {props.str}</div>
        <div className="bestiary-stat"><strong>D:</strong> {props.dex}</div>
        <div className="bestiary-stat"><strong>C:</strong> {props.con}</div>
        <div className="bestiary-stat"><strong>I:</strong> {props.int}</div>
        <div className="bestiary-stat"><strong>W:</strong> {props.wis}</div>
        <div className="bestiary-stat"><strong>Ch:</strong> {props.cha}</div>
      </div>

      <div className="bestiary-attack">{props.attack}</div>
      
      {props.abilities &&
        <div className="bestiary-abilities">
          {props.abilities.map((ability: {name: string, description: string}, index: number) => {
            return [
              <div className="bestiary-ability" key="index">
                <strong>{ability.name}.</strong> {ability.description}
              </div>
            ]
          })}
        </div>
      }

      {props.spells &&
        <NavFlyout
          btnClass="btn-primary btn-link"
          btnCopy="Spell Book"
          navType="expose"
          navId={spellBook}
          navClass="bestiary-spellbook"
        >
          <h3 className="bestiary-name heading-4">Spell Book</h3>
          <div className="bestiary-spells">
            {props.spells.map((spell: {name: string, description: string}, index: number) => {
              return [
                <div className="bestiary-spell" key="index">
                  <strong>{spell.name}.</strong> {spell.description}
                </div>
              ]
            })}
          </div>
        </NavFlyout>
      }

    </article>
  )

}

export default BestiaryCard
