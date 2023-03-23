import React from "react"

const Input = ({ ...props }) => {

  return (

    <div className={`input-container input-${props.type || "text"}`}>

      <input
        type={props.type || "text"}
        value={props.value}
        id={props.id}
        className="input"
        autoComplete="off"
        onChange={props.change}
      />

      <label
        htmlFor={props.id}
        className={`input-label${props.srt === "true" ? " srt" : ""}`}
      >
        {props.label}
      </label>

      {props.helper &&
        <span className="input-helper">{props.helper}</span>
      }

    </div>

  )

}

export default Input
