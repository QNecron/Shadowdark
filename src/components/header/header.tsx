import React, { useState } from "react"
import { Link } from "gatsby"

import Image from "../image/image"
import Wrapper from "../wrapper/wrapper"

import Logo from "../../images/icon.webp"

const Header = ({ ...props }) => {

  const [menu, menuUpdate] = useState(false)

  const menuToggle = () => {
    menuUpdate((current) => !current);
  }

  return (

    <div className="header-container">

      <header id="header" className="header" role="banner">

        <Wrapper classes="header-wrapper" type="structure">

          <nav className="nav" aria-label="Site Navigation" role="navigation">

            <Image
              classes="nav-primary-logo"
              mobile={Logo}
              mobileH="32"
              mobileW="32"
              alt="My Thing | Replace Logo"
            />

            <button
              className="nav-primary-link"
              aria-expanded={menu}
              aria-controls="nav"
              onClick={menuToggle}
            >
              Menu
            </button>

            <div id="nav" className="nav-secondary" nav-open={menu.toString()}>
              <Link className="nav-secondary-link" to="/">Home</Link>
              <Link className="nav-secondary-link" to="/">Creator</Link>
              <Link className="nav-secondary-link" to="/">Spells</Link>
              <Link className="nav-secondary-link" to="/bestiary">Bestiary</Link>
            </div>

          </nav>

        </Wrapper>

      </header>

    </div>

  )

}

export default Header
