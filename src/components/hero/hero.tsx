import React from "react"

const Hero = ({ ...props }) => {

  return (
    <section className="hero" hero-theme={props.theme}>
      <h1>{props.heading1}</h1>
      <p>{props.copy1}</p>
    </section>
  )

}

export default Hero
