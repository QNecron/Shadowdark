import * as React from "react"

const TextArea = ({ ...props }) => {

  return (

    <div className="input-container input-textarea">

      <textarea
        id={props.id}
        className="input"
        value={props.value}
        rows={props.rows}
        cols={props.cols}
        aria-describedby={`${props.id}Helper`}
        disabled={props.disabled}
        onChange={props.change}
      />

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

export default TextArea
