import * as React from "react"

import Dialog from "../dialog/dialog"

const ItemCard = ({ ...props }) => {
  
  const spellBook = props.name.toLowerCase().replaceAll(' ', '')

  return (
    <article className={`item-card${props.source ? " "+props.source : ""}`} key={props.key}>

      <h2 className="item-name heading-3">{props.name}</h2>

      {props.description ? <p className="item-description">{props.description}</p> : ""}

      {props.bonus ? <p className="item-bonus" dangerouslySetInnerHTML={{__html: props.bonus}}></p> : ""}

      <p className="item-benefit" dangerouslySetInnerHTML={{__html: props.benefit}}></p>

      {props.additional ? <p className="item-additional" dangerouslySetInnerHTML={{__html: props.additional}}></p> : ""}

      {props.personality ? <p className="item-personality" dangerouslySetInnerHTML={{__html: props.personality}}></p> : ""}

      {props.curse ? <p className="item-curse" dangerouslySetInnerHTML={{__html: props.curse}}></p> : ""}

      {props.spells &&
        <Dialog
          btnClass="btn-primary btn-link"
          btnCopy="Spell Book"
          dialogType="expose"
          dialogId={spellBook}
          dialogClass="bestiary-spellbook"
        >
          <h3 className="bestiary-name heading-4">Spell Book</h3>
          <div className="bestiary-spells">
            {props.spells.map((spell: {name: string, description: string}, index: number) => {
              return [
                <div className="bestiary-spell" key={index}>
                  <strong>{spell.name}.</strong> {spell.description ? spell.description : ""}
                </div>
              ]
            })}
          </div>
        </Dialog>
      }

    </article>
  )

}

export default ItemCard
