import * as React from "react"

const ItemCard = ({ ...props }) => {

  return (
    <article className={`item-card${props.source ? " "+props.source : ""}`} key={props.key}>

      <h2 className="item-name heading-3">{props.name}</h2>

      <div className="item-source"></div>

      <p className="item-description">{props.description}</p>

      <p className="item-benefit" dangerouslySetInnerHTML={{__html: props.benefit}}></p>

      {props.curse ? <p className="item-curse" dangerouslySetInnerHTML={{__html: props.curse}}></p> : ""}

    </article>
  )

}

export default ItemCard
