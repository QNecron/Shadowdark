import React from "react"

const Wrapper = ({ ...props }) => {

  return (

    <div className={`${props.classes} wrapper`} wrapper-type={props.type}>
      {props.children}
    </div>

  )

}

export default Wrapper
