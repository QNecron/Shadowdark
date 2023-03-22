import React from "react"
import { Link } from "gatsby"

import Image from "../image/image"
import Wrapper from "../wrapper/wrapper"

import LogoWhite from "../../images/logo-sd-white.png"
import LogoBlack from "../../images/logo-sd-black.png"

const Hero = ({ ...props }) => {

  return (
    <section className="hero" hero-theme={props.theme}>

      <Image
        classes="hero-asset"
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
        loading="lazy"
        priority="high"
      />

      <Wrapper classes="hero-wrapper" type={props.wrapper || "structure"}>

        <div className="hero-grid" hero-x={props.x} hero-y={props.y}>

          {(props.logo || props.heading || props.copy || props.cta) &&
            <div className="hero-content">

              {props.logo &&
                <Image
                  desktop={props.logo === "black" ? LogoBlack : LogoWhite}
                  tablet={props.logo === "black" ? LogoBlack : LogoWhite}
                  mobile={props.logo === "black" ? LogoBlack : LogoWhite}
                  classes="hero-logo"
                  alt="Shadowdark Logo"
                  loading="lazy"
                  priority="high"
                />
              }

              {props.heading ?
                <h1 className="hero-heading heading-1">
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

      </Wrapper>

    </section>
  )

}

export default Hero
