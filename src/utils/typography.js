import Typography from "typography"
import deYoungTheme from "typography-theme-de-young"

const defaultColor = "#596dcf"

deYoungTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: defaultColor,
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
export const mainColor = defaultColor
