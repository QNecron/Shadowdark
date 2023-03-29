import * as React from "react"

const Section = ({ ...props }) => {

  return (
    <section
      id={props.id}
      className={`${props.classes ? props.classes+" " : ""}section`}
      section-theme={props.theme || "both"}
    >
      {props.children}
    </section>
  )

}

export default Section
