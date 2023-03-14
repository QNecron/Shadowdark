import React from "react"

import Wrapper from "../wrapper/wrapper"

const Footer = ({ ...props }) => {

  return (
    <div className="footer-container">

      <footer id="footer" className="footer" role="contentinfo">

        <Wrapper classes="footer-wrapper" type="structure">
          {props.children}
        </Wrapper>

      </footer>

    </div>
  )

}

export default Footer
