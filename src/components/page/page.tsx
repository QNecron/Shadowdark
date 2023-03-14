import React from "react"

import "../../styles/styles.scss"

import Header from "../header/header"
import Footer from "../footer/footer"
import Copyright from "../copyright/copyright"

const Page = ({ ...props }) => {

  return (

    <>

    <Header />

    <main id="main" className="main" role="main">
      {props.children}
    </main>

    <Footer>
      <Copyright />
    </Footer>

    </>

  )

}

export default Page
