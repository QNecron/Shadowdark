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
        disabled={props.disabled}
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
      
      <div className="input-icon" aria-hidden="true">&rsaquo;</div>

      {/*
      {props.helper &&
        <span id={`${props.id}Helper`} className="input-helper">{props.helper}</span>
      }
      */}

    </div>

  )

}

export default Select
