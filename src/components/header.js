import { Link } from "gatsby"
import React from "react"
import { rhythm } from "../utils/typography"
import Logo from "./logo"

class Header extends React.Component {
  render() {
    const { title } = this.props

    return (
      <div style={style.mainContainer}>
        <h3 style={style.mainTitle.text}>
          <Link style={style.mainTitle.link} to={`/`}>
            <Logo />
            {title}
          </Link>
        </h3>
        <div style={style.navigationContainer}>
          <h4 style={style.navigationTitle.text}>
            <Link style={style.navigationTitle.link} to={`/`}>
              Blog
            </Link>
          </h4>
          <h4 style={style.navigationTitle.text}>
            <Link style={style.navigationTitle.link} to={`/bio`}>
              Bio
            </Link>
          </h4>
        </div>
      </div>
    )
  }
}

const mainContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
}

const navigationContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}

const mainTitleStyle = {
  text: { fontFamily: `Montserrat, sans-serif`, marginTop: 0 },
  link: {
    boxShadow: `none`,
    textDecoration: `none`,
    color: `inherit`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}

const navigationTitleStyle = {
  text: { marginTop: 0, marginLeft: rhythm(0.8) },
  link: { boxShadow: `none`, textDecoration: `none`, color: `inherit` },
}

const style = {
  mainTitle: mainTitleStyle,
  navigationTitle: navigationTitleStyle,
  mainContainer: mainContainerStyle,
  navigationContainer: navigationContainerStyle,
}

export default Header
