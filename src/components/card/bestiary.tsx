import React from "react"

const BestiaryCard = ({ ...props }) => {

  return (
    <article className={`bestiary-card${props.source ? " "+props.source : ""}`} key={props.key}>

      <h3 className="bestiary-name">{props.name}</h3>

      <p className="bestiary-description">{props.description}</p>

      <div className="bestiary-details">
        <div className="bestiary-detail"><strong>LV:</strong> {props.level}</div>
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

      {props.ability_1 &&
        <div className="bestiary-abilities">
          {props.ability_1 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: props.ability_1}}></div> : ""}
          {props.ability_2 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: props.ability_2}}></div> : ""}
          {props.ability_3 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: props.ability_3}}></div> : ""}
          {props.ability_4 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: props.ability_4}}></div> : ""}
          {props.ability_5 ? <div className="bestiary-ability" dangerouslySetInnerHTML={{__html: props.ability_5}}></div> : ""}
        </div>
      }

      {props.spell_1 &&
        <div className="bestiary-spells">
          {props.spell_1 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: props.spell_1}}></div> : ""}
          {props.spell_2 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: props.spell_2}}></div> : ""}
          {props.spell_3 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: props.spell_3}}></div> : ""}
          {props.spell_4 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: props.spell_4}}></div> : ""}
          {props.spell_5 ? <div className="bestiary-spell" dangerouslySetInnerHTML={{__html: props.spell_5}}></div> : ""}
        </div>
      }

    </article>
  )

}

export default BestiaryCard
