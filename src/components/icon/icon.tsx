import * as React from "react"

import Close from "../../images/icons/close.svg"
import Dice from "../../images/icons/dice.svg"
import Download from "../../images/icons/cloud-download.svg"
import Upload from "../../images/icons/cloud-upload.svg"
import Delete from "../../images/icons/skull.svg"
import Search from "../../images/icons/search.svg"

const Icon = ({ ...props }) => {

  const type = (i) => {

    let url = "error"

    if (i === "close") url = Close
    if (i === "dice") url = Dice
    if (i === "download") url = Download
    if (i === "upload") url = Upload
    if (i === "delete") url = Delete
    if (i === "search") url = Search

    return url

  }

  return (
    <img src={type(props.icon)} className="icon" height="40" width="40" alt=" " aria-hidden="true" />
  )

}

export default Icon
