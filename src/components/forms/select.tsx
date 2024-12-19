import * as React from "react"

const Select = ({ ...props }) => {

  return (

    <div className="input-container input-select">

      <select
        value={props.value}
        id={props.id}
        className="input"
        aria-describedby={`${props.id}Helper`}
        autoComplete="off"
        onChange={props.change}
      >
        {props.children}
      </select>

      <label
        htmlFor={props.id}
        className={`input-label${props.srt === "true" ? " srt" : ""}`}
      >
        {props.label}
      </label>

      {props.helper &&
        <span id={`${props.id}Helper`} className="input-helper">{props.helper}</span>
      }

    </div>

  )

}

export default Select
