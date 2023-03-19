import * as React from "react"

const Tabs = ({ ...props }) => {

  return(

    <div className={props.tabClass}>
      {props.data.map((info, index) =>
        <button
          className={`btn-tab ${props.btnClass || "btn-primary"}`}
          aria-selected={props.state === info ? "true" : "false"}
          key={info + '-' + index}
          onClick={() => props.click(info)}
        >
          {info}
        </button>
      )}
    </div>

  )

}

export default Tabs
