import * as React from "react";
import { css, withStyles, withStylesProps } from "Core/withStyles";

type Props = {
  onClick: () => {};
  inverted?: boolean;
} & withStylesProps;

function Button({ children, styles, onClick, inverted = false }: Props) {
  return (
    <button
      {...css(styles.button, inverted && styles.button_inverted)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default withStyles(({ color, ui }: withStylesProps) => ({
  button: {
    background: color.primary,
    padding: `${ui.unit}px ${2 * ui.unit}px`,
    borderRadius: ui.borderRadius
  },
  button_inverted: {
    background: color.bg,
    border: `2px solid ${color.primary}`
  }
}))(Button);
