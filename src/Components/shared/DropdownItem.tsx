import * as React from "react";
import { css, withStyles, withStylesProps } from "Core/withStyles";

import Button from "Shared/Button";

type Props = {
  children: React.ReactNode;
  onClick?: () => {};
} & withStylesProps;

function DropdownItem({ children, onClick, styles }: Props) {
  return (
    <div {...css(styles.dropdown_item)} onClick={onClick}>
      {children}
    </div>
  );
}

export default withStyles(({ color, ui, transition }: withStylesProps) => ({
  dropdown_item: {
    padding: `${ui.unit}px ${2 * ui.unit}px`,
    cursor: "pointer",
    transition: transition(["background-color"]),
    ":hover": {
      background: color.primary[0]
    }
  }
}))(DropdownItem);
