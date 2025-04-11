import React, { useState } from "react"

import Icon from "../icon/icon"

const NavFlyout = ({ ...props }) => {

  const [nav, navUpdate] = useState(false)

  const navToggle = () => {
    navUpdate((current) => !current);
  }

  return (
    <>

    <button
      className={props.btnClass}
      aria-expanded={nav}
      aria-controls={props.navId}
      onClick={navToggle}
    >
      {props.btnCopy}
    </button>

    <div 
      id={props.navId} 
      className={`${props.navClass ? props.navClass+" " : ""}dialog`} 
      dialog-type={props.navType || "nav-flyout"}
      dialog-open={nav.toString()}
    >

      <div className="dialog-content">

        <button className="btn-icon btn-secondary dialog-close" onClick={navToggle}>
          <span className="srt">Close</span>
          <Icon icon="close" />
        </button>

        {props.children}

      </div>

    </div>

    </>
  )

}

export default NavFlyout
