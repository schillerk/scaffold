import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import {
  css,
  withStyles,
  ThemeProvider,
  withStylesProps
} from "react-with-styles";

const theme = {
  color: {
    primary: "#FF5A5F",
    secondary: "#00A699",
    bg: "#FFFFFF"
  },
  ui: {
    unit: 8,
    borderRadius: 3
  }
};

ThemedStyleSheet.registerTheme(theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, withStylesProps, ThemeProvider, ThemedStyleSheet };
