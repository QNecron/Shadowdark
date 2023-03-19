import * as React from "react"
import { Link } from "gatsby"

import Image from "../image/image"
import Wrapper from "../wrapper/wrapper"
import NavFlyout from "../nav/nav-flyout"

import Logo from "../../images/icon.webp"

const Header = ({ ...props }) => {

  return (

    <div className="header-container">

      <header id="header" className="header" role="banner">

        <Wrapper classes="header-wrapper" type="structure">

          <nav className="nav" aria-label="Site Navigation" role="navigation">

            <Link className="nav-logo" to="/">
              <Image
                mobile={Logo}
                mobileH="32"
                mobileW="32"
                alt="My Thing | Replace Logo"
              />
            </Link>

            <NavFlyout
              btnClass="btn btn-primary"
              btnCopy="Menu"
              navId="nav"
              navClass="nav-primary"
            >
              {/* change btn-primary => btn-link */}
              <Link className="btn btn-primary" to="/">Creator</Link>
              <Link className="btn btn-primary" to="/">Spells</Link>
              <Link className="btn btn-primary" to="/bestiary">Bestiary</Link>
            </NavFlyout>

          </nav>

        </Wrapper>

      </header>

    </div>

  )

}

export default Header
