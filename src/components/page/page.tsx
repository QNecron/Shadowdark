import React from "react"

import "../../styles/styles.scss"

const Page = ({ ...props }) => {

  return (

    // header here

    <main className="main" role="main">
      {props.children}
    </main>

    // footer here

  )

}

export default Page
