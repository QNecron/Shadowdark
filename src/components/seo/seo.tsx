import * as React from "react"

const SEO = ({ ... props }) => {

  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </>
  )

}

export default SEO
