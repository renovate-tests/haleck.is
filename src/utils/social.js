import {
  faGithub,
  faTwitter,
  faLinkedin,
  faMedium,
  faTelegram,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons"

const socialNetworks = [
  {
    kind: "GitHub",
    icon: faGithub,
    url: "https://github.com/crazyjooe",
  },
  {
    kind: "Goodreads",
    icon: faGoodreads,
    url: "https://www.goodreads.com/user/show/72052674-artjoms-haleckis",
  },
  {
    kind: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/haleckis/",
  },
  {
    kind: "Twitter",
    icon: faTwitter,
    url: "https://twitter.com/crazyjooe",
  },
  {
    kind: "Medium",
    icon: faMedium,
    url: "https://medium.com/@artjoms.haleckis",
  },
  {
    kind: "Telegram",
    icon: faTelegram,
    url: "https://t.me/crazyjooe",
  },
]

function socialUrlForKind(kind) {
  return socialNetworks.find(o => o.kind === kind).url
}

export default socialNetworks
export { socialUrlForKind }
