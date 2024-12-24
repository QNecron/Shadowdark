import * as React from "react"

const Accordion = ({ ...props }) => {

  return (
    
    <details id={props.id} className={`accordion${props.classes ? "-"+props.classes : ""}`} open={props.open}>
      
      <summary className={`accordion-title${props.classes ? "-"+props.classes : ""} ${props.trigger}`}>
        {props.title}
      </summary>
      
      <div className={`accordion-content${props.classes ? "-"+props.classes : ""}`}>
        {props.children}
      </div>
      
    </details>

  )

}

export default Accordion
