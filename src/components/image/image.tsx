import React from "react"

const Image = ({ ...props }) => {

  return (
    <picture className={`${props.classes ? props.classes+" " : ""}asset-container`}>

      {props.desktop ?
        <source srcSet={props.desktop}
          height={props.desktopH}
          width={props.desktopW}
          media="(min-width: 1025px)"
        />
      : ""}

      {props.tablet ?
        <source srcSet={props.tablet}
          height={props.tabletH}
          width={props.tabletW}
          media="(min-width: 768px) and (max-width: 1024px)"
        />
      : ""}

      {props.mobile ?
        <img src={props.mobile}
          className="asset"
          height={props.mobileH}
          width={props.mobileW}
          loading="lazy"
          alt={props.alt || " "}
        />
      : ""}

    </picture>
  )

}

export default Image
