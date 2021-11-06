import { styled } from "./../../styles/theme.config.js";

export const Container = styled("div", {
  display: "flex",
  margin: "3rem 2rem",

  "@media only screen and (max-width : 600px)": {
    flexDirection: "column",
    margin: "0",
  },
});
