import * as React from "react"

const Grid = ({ ...props }) => {

  return (

    <div
      className={`${props.classes ? props.classes+" " : ""}grid`}
      grid-desktop={props.desktop}
      grid-tablet={props.tablet}
      grid-mobile={props.mobile}
      grid-gap={props.gap || "16"}
    >
      {props.children}
    </div>

  )

}

export default Grid
