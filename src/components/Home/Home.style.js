import { styled } from "./../../styles/theme.config.js";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "top",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "1rem 2rem",

  a: {
    textDecoration: "none",
  },

  "a:visited": {
    color: "inherit",
  },
});

export const Button = styled("div", {
  background: "none",
  border: "none",
});
