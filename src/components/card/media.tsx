import * as React from "react"
import { Link } from "gatsby"

import Image from "../image/image"

const MediaCard = ({ ...props }) => {

  return (

    <article className="media-card" media-theme={props.theme}>

      <Image
        classes="media-card-asset"
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
        priority="auto"
      />

      {(props.heading || props.copy || props.cta) &&
        <div className="media-card-content">

          <h2 className="media-card-heading heading-3">
            {props.heading}
          </h2>

          <p className="media-card-copy">
            {props.copy}
          </p>

          {(!props.target && props.url) &&
            <Link
              to={props.url}
              className={`${props.linkClass ? props.linkClass+" " : ""}media-card-cta`}
            >
              {props.cta}
            </Link>
          }

          {(props.target === "_blank" && props.url) &&
            <a
              href={props.url}
              target={props.target}
              className={`${props.linkClass ? props.linkClass+" " : ""}media-card-cta`}
            >
              {props.cta}
            </a>
          }

        </div>
      }

    </article>

  )

}

export default MediaCard
