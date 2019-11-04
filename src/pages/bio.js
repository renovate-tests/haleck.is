import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import LongBio from "../components/longBio"
import SEO from "../components/seo"

class Bio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <LongBio />
      </Layout>
    )
  }
}

export default Bio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
