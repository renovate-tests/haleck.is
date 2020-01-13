import React from "react"
import { primaryColor, secondaryColor } from "../utils/typography"

const Tag = props => (
  <p style={props.style} className={props.type}>
    {props.text}
  </p>
)

const GreenTag = props => <Tag style={greenTagStyle} text={props.text}></Tag>
const PurpleTag = props => <Tag style={purpleTagStyle} text={props.text}></Tag>

const tagStyle = {
  borderRadius: "20%",
  paddingLeft: 6,
  paddingRight: 6,
  backgroundColor: "WhiteSmoke",
}

const purpleTagStyle = {
  ...tagStyle,
  color: primaryColor,
}

const greenTagStyle = {
  ...tagStyle,
  color: secondaryColor,
}

export { GreenTag, PurpleTag }
