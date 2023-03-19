import React from "react"

import Close from "../../images/icons/close.svg"

const Icon = ({ ...props }) => {

  const type = (i) => {

    let url = "error"

    if (i === "close") url = Close

    return url

  }

  return (
    <img src={type(props.icon)} className="icon" alt=" " aria-hidden="true" />
  )

}

export default Icon
