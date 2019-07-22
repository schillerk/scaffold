import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import {
  css,
  withStyles,
  ThemeProvider,
  withStylesProps
} from "react-with-styles";
import { join } from "path";

const primary = [
  "#ffa39e",
  "#ff7875",
  "#ff4d4f",
  "#f5222d",
  "#cf1322",
  "#a8071a",
  "#820014"
];

const secondary = [
  "#adc6ff",
  "#85a5ff",
  "#597ef7",
  "#2f54eb",
  "#1d39c4",
  "#10239e",
  "#061178"
];

const neutral = [
  "#ffffff",
  "#d0d0d0",
  "#a2a2a2",
  "#777777",
  "#4e4e4e",
  "#292929",
  "#000000"
];

const theme = {
  color: {
    primary,
    secondary,
    neutral,
    text: [neutral[4], neutral[5], neutral[6]]
  },
  ui: {
    unit: 8,
    borderRadius: 3,
    borderWidth: 1
  },
  transition: properties =>
    properties.map(property => `${property} 200ms ease-in-out`).join(", ")
};

ThemedStyleSheet.registerTheme(theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, withStylesProps, ThemeProvider, ThemedStyleSheet };
