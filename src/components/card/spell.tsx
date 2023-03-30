import * as React from "react"

const SpellCard = ({ ...props }) => {

  return (
    <article className={`spell-card${props.source ? " "+props.source : ""}`} key={props.key} card-search={props.name}>

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

      <p className="spell-description">{props.description}</p>

      {props.helper_1 &&
        <div className="spell-helpers">
          {props.helper_1 ? <div className="spell-helper" dangerouslySetInnerHTML={{__html: props.helper_1}}></div> : ""}
          {props.helper_2 ? <div className="spell-helper" dangerouslySetInnerHTML={{__html: props.helper_2}}></div> : ""}
        </div>
      }

    </article>
  )

}

export default SpellCard
