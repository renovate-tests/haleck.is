import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { rhythm } from "../utils/typography"
import SOCIAL from "../utils/social"

const SocialLinks = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {SOCIAL.map(s => (
        <div key={s.kind} style={{ marginRight: rhythm(0.5), float: "right" }}>
          <a className="u-no-box-shadow" href={s.url}>
            <FontAwesomeIcon
              icon={s.icon}
              color="var(--gray)"
              title={`Link to my ${s.kind}`}
            />
          </a>
        </div>
      ))}
    </div>
  )
}

export default SocialLinks
