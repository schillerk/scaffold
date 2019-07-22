import * as React from "react";
import { css, withStyles, withStylesProps } from "Core/withStyles";

import Button from "Shared/Button";

type Props = {
  label: string;
  onClick?: () => {};
} & withStylesProps;

function DropdownItem({ label, onClick, styles }: Props) {
  return (
    <div {...css(styles.dropdown_item)} onClick={onClick}>
      {label}
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
