/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import { rhythm } from "../utils/typography"
import SocialLinks from "./socialLinks"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          shortName
          livingCountry
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, shortName, livingCountry, social } = data.site.siteMetadata
  return (
    <div style={{ marginBottom: rhythm(2.5) }}>
      <div
        style={{
          display: `flex`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
          My name is {shortName}, and I’m 🇱🇻-born introvert, software developer
          and videogame nerd, currenly living and working in {livingCountry}.
          {` `}
        </p>
      </div>
      <p>
        <SocialLinks />
      </p>
    </div>
  )
}

export default Bio
