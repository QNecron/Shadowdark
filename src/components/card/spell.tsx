import * as React from "react"

const SpellCard = ({ ...props }) => {

  return (
    <article className={`spell-card${props.source ? " "+props.source : ""}`} key={props.key}>

      <h2 className="spell-name heading-3">{props.name}</h2>

      <div className="spell-tier">{props.tier}</div>

      <div className="spell-class">
        <strong>Class:</strong> {props.class}
      </div>

      <div className="spell-duration">
        <strong>Duration:</strong> {props.duration}
      </div>

      <div className="spell-range">
        <strong>Range:</strong> {props.range}
      </div>

      <p className="spell-description">{props.description_1}</p>

      {props.description_2 ? <p className="spell-description" dangerouslySetInnerHTML={{__html: props.description_2}}></p> : ""}

      {props.description_3 ? <p className="spell-description" dangerouslySetInnerHTML={{__html: props.description_3}}></p> : ""}

    </article>
  )

}

export default SpellCard
