import Typography from "typography"
import deYoungTheme from "typography-theme-de-young"

const primaryColorConst = "#596dcf"
const secondaryColorConst = "#33cc33"

deYoungTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: primaryColorConst,
  },
  "a:hover": {
    color: secondaryColorConst,
    textDecoration: "none",
  },
})

const typography = new Typography(deYoungTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const primaryColor = primaryColorConst
export const secondaryColor = secondaryColorConst
