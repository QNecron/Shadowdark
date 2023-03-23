import React from "react"

const TextArea = ({ ...props }) => {

  return (

    <div className="input-container input-textarea">

      <textarea
        id={props.id}
        className="input"
        rows={props.rows}
        cols={props.cols}
      ></textarea>

      <label
        htmlFor={props.id}
        className={`input-label${props.srt === true ? " srt" : ""}`}
      >
        {props.label}
      </label>

    </div>

  )

}

export default TextArea
