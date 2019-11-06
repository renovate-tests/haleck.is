import React from "react"
import { Link, graphql } from "gatsby"

import ShortBio from "../components/shortBio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale, supportColor } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1 style={style.header}>{post.frontmatter.title}</h1>
            <p style={style.subtitle}>
              {post.frontmatter.date} {"\u2022"} {post.timeToRead} min read
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={style.bottomLine} />
          <footer>
            <ShortBio />
          </footer>
        </article>

        <nav>
          <ul style={style.bottomNavigationList}>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

const headerStyle = {
  marginTop: rhythm(1),
  marginBottom: 0,
}

const subtitleStyle = {
  ...scale(-1 / 5),
  display: `block`,
  marginBottom: rhythm(1),
  color: supportColor,
}

const bottomLineStyle = {
  marginBottom: rhythm(1),
}

const bottomNavigationListStyle = {
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-between`,
  listStyle: `none`,
  padding: 0,
}

const style = {
  header: headerStyle,
  subtitle: subtitleStyle,
  bottomLine: bottomLineStyle,
  bottomNavigationList: bottomNavigationListStyle,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      timeToRead
    }
  }
`
