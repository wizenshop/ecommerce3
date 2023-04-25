import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  theme,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      colorDefaultMenuIcon: "rgba(57, 57, 57, 0.87)",
      colorActiveMenuIcon: "#028cb8",

      white: "#f8f8f8",
      white2: "#E3F3E9",
      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      blue600: "#009ED0",
      blue700: "#0C5070",
      blue800: "#051932",
      blue900: "#0E1526",

      shadow900: "hsla(174,63%, 15%, 0.15)",
    },

    fontSizes: {
      nd: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    media: {
      bp1: "(min-width: 640px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 768px)",
      bp4: "(min-width: 900px)",
      bp5: "(min-width: 1024px)",
    },
  },
});
