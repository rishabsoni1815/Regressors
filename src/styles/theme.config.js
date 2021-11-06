import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  getCssString,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      black: "#030303",
      white: "#FAFAFD",
      primary: "#DD3D66",
      primary_light: "#F34E6D",
      secondary: "#37958F",
      font: "#292C3E",
      gray: "#535766",
    },

    fonts: {
      font: "Catamaran, sans-serif",
      code: "monospace",
    },
    fontSizes: {
      1: "14px",
      2: "16px",
      3: "20px",
      4: "24px",
      5: "36px",
      6: "48px",
      7: "54px",
    },
  },
});

export const Layout = styled("div", {
  position: "relative",
  overflow: "hidden",
});
