import * as React from "react"
import { Link } from "gatsby"

import Image from "../image/image"
import Wrapper from "../wrapper/wrapper"
import NavFlyout from "../nav/nav-flyout"

import Logo from "../../images/d20.png"

const Header = ({ ...props }) => {

  return (

    <div className="header-container">

      <header id="header" className="header" role="banner">

        <Wrapper classes="header-wrapper" type="structure">

          <nav className="nav" aria-label="Site Navigation" role="navigation">

            <Link className="nav-logo" to="/">
              <Image
                mobile={Logo}
                mobileH="40"
                mobileW="40"
                alt="Placeholder Logo"
              />
            </Link>

            <NavFlyout
              btnClass="btn btn-primary"
              btnCopy="Menu"
              navId="nav"
              navClass="nav-primary"
            >
              <Link className="btn btn-primary" to="/">Home</Link>
              <Link className="btn btn-primary" to="/creator">Creator</Link>
              <Link className="btn btn-primary" to="/spells">Spells</Link>
              <Link className="btn btn-primary" to="/bestiary">Bestiary</Link>
            </NavFlyout>

          </nav>

        </Wrapper>

      </header>

    </div>

  )

}

export default Header
