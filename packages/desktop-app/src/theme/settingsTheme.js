import { theme as defaultTheme } from "@blend-ui/core";

const basePrimary = "#1E1D1D";
const baseSecondary = "#0D2177";
const baseTertiary = "#272727";

const brandAccent = "#0D2177";

const baseWhite = "#F5F8F7DE";
const baseHover = "#1F3AB2";
const baseMuted = "#292828";

const baseBright = "#4B4B4B";

const subtleHiover = "#373436";

const textMuted = "#969595";

const modalListItem = "#e7dbf0";
const borderLeftBoxColor = "#eaecf0";
const categoryBadgeBG = "#d5e7fb";
const fullWhite = "#f5f8f7";
const toolTipBG = "#222";
const colors = {
  //   textPrimary: baseWhite,
  textMuted: textMuted,
  brandAccent,

  basePrimary,
  baseSecondary,
  baseTertiary,
  baseMuted,
  baseWhite,
  componentPrimary: brandAccent,
  componentAccent: brandAccent,
  backroundAccent: brandAccent,
  baseHover,
  baseBright,
  subtleHiover,
  text: {
    muted: baseBright,
  },

  modalListItem,
  borderLeftBoxColor,
  categoryBadgeBG,
  fullWhite,
  toolTipBG,
};

const componentStyles = {
  button: {
    fill: {
      backgroundColor: brandAccent,

      border: "0.0625rem solid #0D2177",
    },
    outline: {
      backgroundColor: "transparent",

      border: "0.0625rem solid #0D2177",
    },
    link: {
      color: brandAccent,
    },
    file: {
      color: brandAccent,
    },
  },
};

const theme = {
  colors,
  componentStyles,
};
export default theme;
