import React from "react"
import { Link } from "gatsby"

import Image from "../image/image"
import Wrapper from "../wrapper/wrapper"

import Logo from "../../images/icon.webp"

const Header = ({ ...props }) => {

  return (

    <div className="header-container">

      <header id="header" className="header" role="banner">

        <Wrapper classes="header-wrapper" type="structure">

          <nav className="nav-primary" aria-label="Primary Navigation" role="navigation">
            <Image
              classes="nav-primary-logo"
              mobile={Logo}
              mobileH="32"
              mobileW="32"
              alt="My Thing | Shadowdark by The Arcane Library"
            />
            <Link className="nav-primary-link" to="/">Home</Link>
            <Link className="nav-primary-link" to="/">Creator</Link>
            <Link className="nav-primary-link" to="/">Spells</Link>
            <Link className="nav-primary-link" to="/">Bestiary</Link>
          </nav>

        </Wrapper>

      </header>

    </div>

  )

}

export default Header
