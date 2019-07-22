import * as React from "react";

import Button from "Shared/Button";
import { css, withStyles, withStylesProps } from "Core/withStyles";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  open: boolean;
} & withStylesProps;

function Dropdown({ children, label, onClick, open = false, styles }: Props) {
  return (
    <div>
      <Button inverted onClick={onClick}>
        {label} v
      </Button>
      {open && <div {...css(styles.dropdown_items)}>{children}</div>}
    </div>
  );
}

export default withStyles(({ color, ui }: withStylesProps) => ({
  dropdown_items: {
    display: "flex",
    flexDirection: "column",
    width: 20 * ui.unit,
    position: "absolute",
    background: color.neutral[0],
    borderRadius: ui.borderRadius,
    padding: `${ui.unit}px 0`,
    boxShadow: `0 4px 8px rgba(16,22,26, .35)`,
    marginTop: ui.unit / 2
  }
}))(Dropdown);
