import * as React from "react"

import Clipboard from "../../images/icons/clipboard.svg"
import Close from "../../images/icons/close.svg"
import Copy from "../../images/icons/copy.svg"
import Dice from "../../images/icons/dice.svg"
import Download from "../../images/icons/cloud-download.svg"
import Upload from "../../images/icons/cloud-upload.svg"
import Flame from "../../images/icons/flame.svg"
import Delete from "../../images/icons/skull.svg"
import Search from "../../images/icons/search.svg"

const Icon = ({ ...props }) => {

  const type = (i) => {

    let url = "error"

    if (i === "clipboard") url = Clipboard
    if (i === "close") url = Close
    if (i === "copy") url = Copy
    if (i === "dice") url = Dice
    if (i === "download") url = Download
    if (i === "upload") url = Upload
    if (i === "delete") url = Delete
    if (i === "search") url = Search
    if (i === "flame") url = Flame

    return url

  }

  return (
    <img src={type(props.icon)} className="icon" height="40" width="40" alt=" " aria-hidden="true" />
  )

}

export default Icon
