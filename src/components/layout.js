import React from "react"
import { rhythm } from "../utils/typography"
import Header from "./header"

const contentStyle = {
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(30),
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
}

const headerStyle = {
  marginTop: rhythm(1),
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(40),
  marginBottom: 0,
}

const headerContainerStyle = {
  marginLeft: rhythm(1),
  marginRight: rhythm(1),
}

const footerStyle = {
  marginTop: rhythm(1),
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(40),
  marginBottom: rhythm(1),
}

const style = {
  content: contentStyle,
  header: headerStyle,
  headerContainer: headerContainerStyle,
  footer: footerStyle,
}

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <header style={style.header}>
          <div style={style.headerContainer}>
            <Header title={title} />
          </div>
        </header>
        <main style={style.content}>{children}</main>
        <footer style={style.footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
