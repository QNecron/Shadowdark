import * as React from "react"

const Accordion = ({ ...props }) => {

  return (
    
    <details id={props.id} className={`accordion${props.classes ? "-"+props.classes : ""}`}>
      
      <summary className={`accordion-title${props.classes ? "-"+props.classes : ""}`}>
        {props.title}
      </summary>
      
      <div className={`accordion-content${props.classes ? "-"+props.classes : ""}`}>
        {props.content}
      </div>
      
    </details>

  )

}

export default Accordion
