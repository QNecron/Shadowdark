import React from "react"
import { Link } from "gatsby"

import Image from "../image/image"

const Hero = ({ ...props }) => {

  return (
    <section className="hero" hero-theme={props.theme}>

      <Image
        desktop={props.desktop}
        desktopH={props.desktopH}
        desktopW={props.desktopW}
        tablet={props.tablet}
        tabletH={props.tabletH}
        tabletW={props.tabletW}
        mobile={props.mobile}
        mobileH={props.mobileH}
        mobileW={props.mobileW}
        alt={props.alt}
      />

      <div className="hero-wrapper wrapper" wrapper-type={props.wrapper || "structure"}>

        <div className="hero-grid grid" x-axis={props.x} y-axis={props.y}>

          {(props.heading || props.copy || props.cta) &&
            <div className="hero-content">

              {props.heading ?
                <h1 className="hero-heading">
                  {props.heading}
                </h1>
              : ""}

              {props.copy ?
                <p className="hero-copy">
                  {props.copy}
                </p>
              : ""}

              {props.cta ?
                <Link className="hero-cta" to={props.link}>
                  {props.cta}
                </Link>
              : ""}

            </div>
          }

        </div>

      </div>

    </section>
  )

}

export default Hero
