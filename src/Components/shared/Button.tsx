import * as React from "react";
import { css, withStyles, withStylesProps } from "Core/withStyles";

type Props = {
  onClick: () => {};
} & withStylesProps;

function Button({ children, styles, onClick }: Props) {
  return (
    <button {...css(styles.button)} onClick={onClick}>
      {children}
    </button>
  );
}

export default withStyles(({ color, ui }: withStylesProps) => ({
  button: {
    background: color.primary,
    padding: `${ui.unit}px ${2 * ui.unit}px`,
    borderRadius: ui.borderRadius
  }
}))(Button);
