import React from "react"
import { GreenTag, PurpleTag } from "./tag"

const Tags = props => {
  return (
    <div style={tagListStyle}>
      {props.greenTags.map((item, idx) => (
        <span style={{ paddingRight: 8, paddingBottom: 4 }}>
          <GreenTag text={item}></GreenTag>
        </span>
      ))}

      {props.purpleTags.map((item, idx) => (
        <span>
          <PurpleTag text={item}></PurpleTag>
        </span>
      ))}
    </div>
  )
}

const tagListStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
}

export default Tags
