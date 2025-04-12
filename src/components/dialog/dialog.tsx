import React, { useState } from "react"

import Icon from "../icon/icon"

const Dialog = ({ ...props }) => {

  const [dialog, dialogUpdate] = useState(false)

  const dialogToggle = () => {
    dialogUpdate((current) => !current);
  }

  return (
    <>

    <button
      className={props.btnClass}
      aria-expanded={dialog}
      aria-controls={props.navId}
      onClick={dialogToggle}
    >
      {props.btnCopy}
    </button>

    <dialog 
      id={props.dialogId} 
      className={`${props.dialogClass ? props.dialogClass+" " : ""}dialog`} 
      dialog-type={props.dialogType}
      open={dialog}
    >

      <div className="dialog-content">

        <button className="btn-icon btn-secondary dialog-close" onClick={dialogToggle}>
          <span className="srt">Close</span>
          <Icon icon="close" />
        </button>

        {props.children}

      </div>

    </dialog>

    </>
  )

}

export default Dialog
