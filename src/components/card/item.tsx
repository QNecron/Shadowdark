import * as React from "react"

const ItemCard = ({ ...props }) => {

  return (
    <article className={`item-card${props.source ? " "+props.source : ""}`} key={props.key}>

      <h2 className="item-name heading-3">{props.name}</h2>

      <p className="item-description">{props.description}</p>

      {props.bonus ? <p className="item-bonus" dangerouslySetInnerHTML={{__html: props.bonus}}></p> : ""}

      <p className="item-benefit" dangerouslySetInnerHTML={{__html: props.benefit}}></p>

      {props.curse ? <p className="item-curse" dangerouslySetInnerHTML={{__html: props.curse}}></p> : ""}

      {props.personality ? <p className="item-personality" dangerouslySetInnerHTML={{__html: props.personality}}></p> : ""}

      {props.additional ? <p className="item-additional" dangerouslySetInnerHTML={{__html: props.additional}}></p> : ""}

    </article>
  )

}

export default ItemCard
