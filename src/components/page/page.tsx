import React from "react"

import "../../styles/styles.scss"

import Header from "../header/header"

const Page = ({ ...props }) => {

  return (

    <>

    <Header />

    <main id="main" className="main" role="main">
      {props.children}
    </main>

    [My Thing] is an independenmt product published under the Shadowdark RPG Thrid-Partry License and is not affiliated with The Arcane Library, LLC. Shadow RPG &copy; 2023 The Arcane Library.

    </>

  )

}

export default Page
