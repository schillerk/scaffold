import * as React from "react";
import {
  css,
  withStyles,
  withStylesProps,
  ThemeProvider
} from "Core/withStyles";

type Props = {
  onClick: () => {};
  inverted?: boolean;
} & withStylesProps;

function Button({
  children,
  styles,
  onClick,
  borderless = false,
  inverted = false
}: Props) {
  return (
    <button
      {...css(
        styles.button,
        !borderless && styles.button_border,
        inverted && styles.button_inverted
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default withStyles(({ color, ui, transition }: withStylesProps) => ({
  button: {
    background: color.primary[3],
    borderColor: color.primary[3],
    borderRadius: ui.borderRadius,
    borderWidth: 0,
    color: color.neutral[0],
    cursor: "pointer",
    padding: `${ui.unit}px ${2 * ui.unit}px`,
    transition: transition([
      "background-color",
      "border-color",
      "color",
      "box-shadow"
    ]),
    ":focus": {
      outline: 0
    }
  },
  button_inverted: {
    background: color.neutral[9],
    color: color.text[2],
    ":hover": {
      color: color.text[0],
      backgroundColor: color.neutral[0],
      borderColor: color.primary[4]
    }
  },
  button_border: {
    borderWith: 0,
    borderWidth: ui.borderWidth,
    ":hover": {
      backgroundColor: color.primary[4],
      borderColor: color.primary[4]
    },
    ":active": {
      boxShadow: `0 0 0 2px ${color.primary[0]}`
    }
  }
}))(Button);
