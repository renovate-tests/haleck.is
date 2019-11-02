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
  marginLeft: rhythm(1),
  marginTop: rhythm(1),
  marginRight: rhythm(1),
  marginBottom: 0,
}

const style = { content: contentStyle, header: headerStyle }

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <header style={style.header}>
          <Header title={title} />
        </header>
        <main style={style.content}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
