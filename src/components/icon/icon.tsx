import React from "react"

import Close from "../../images/icons/close.svg"
import Dice from "../../images/icons/dice.svg"

const Icon = ({ ...props }) => {

  const type = (i) => {

    let url = "error"

    if (i === "close") url = Close
    if (i === "dice") url = Dice

    return url

  }

  return (
    <img src={type(props.icon)} className="icon" height="40" width="40" alt=" " aria-hidden="true" />
  )

}

export default Icon
