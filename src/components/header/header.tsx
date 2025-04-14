import * as React from "react"
import { Link } from "gatsby"

import Image from "../image/image"
import Wrapper from "../wrapper/wrapper"
import Dialog from "../dialog/dialog"

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
                alt="Umbral Tools D20"
              />
            </Link>

            <Dialog
              btnClass="btn btn-primary"
              btnCopy="Menu"
              dialogType="nav-primary"
              dialogId="nav"
            >
              <Link className="btn btn-primary" to="/">Home</Link>
              <Link className="btn btn-primary" to="/codex">Codex</Link>
              <Link className="btn btn-primary" to="/creator">Creator</Link>
              <Link className="btn btn-primary" to="/combat">Combat</Link>
              <Link className="btn btn-primary" to="/feats">Feats</Link>
              <Link className="btn btn-primary" to="/spells">Spells</Link>
              <Link className="btn btn-primary" to="/items">Items</Link>
              <Link className="btn btn-primary" to="/bestiary">Bestiary</Link>
            </Dialog>

          </nav>

        </Wrapper>

      </header>

    </div>

  )

}

export default Header
