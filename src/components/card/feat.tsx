import * as React from "react"

const FeatCard = ({ ...props }) => {

  return (
    <article className={`feat-card${props.source ? " "+props.source : ""}`} key={props.key}>

      <h2 className="feat-name heading-3">{props.name}</h2>

      <p className="feat-description">{props.description}</p>

      <ul className="feat-properties">
        <li className="feat-property action">{props.action}</li>
        <li className="feat-property type">{props.type}</li>
        <li className="feat-property stacking">stacks : {props.stacking === true ? "yes" : "no"}</li>
      </ul>

    </article>
  )

}

export default FeatCard
