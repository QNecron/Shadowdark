import React from "react"

const Wrapper = ({ ...props }) => {

  return (

    <div
      className={`${props.classes ? props.classes+" " : ""}wrapper`}
      wrapper-type={props.type || "structure"}
    >
      {props.children}
    </div>

  )

}

export default Wrapper
