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

const genericContainerStyle = {
  marginLeft: rhythm(1),
  marginRight: rhythm(1),
}

const footerStyle = {
  marginTop: rhythm(1),
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(40),
  marginBottom: rhythm(1),
  fontSize: 16,
}

const style = {
  content: contentStyle,
  header: headerStyle,
  genericContainer: genericContainerStyle,
  footer: footerStyle,
}

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <header style={style.header}>
          <div style={style.genericContainer}>
            <Header title={title} />
          </div>
        </header>
        <main style={style.content}>
          <div style={style.genericContainer}>{children}</div>
        </main>
        <footer style={style.footer}>
          © {new Date().getFullYear()}, Artjoms Haleckis
        </footer>
      </div>
    )
  }
}

export default Layout
