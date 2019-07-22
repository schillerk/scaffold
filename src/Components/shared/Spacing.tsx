import * as React from "react";
import { withStyles, withStylesProps } from "Core/withStyles";

const parseSpacing = (unit: number, val: number) => `${val * unit || 0}px`;

type Props = {
  all?: number;
  sides?: number;
  ends?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
} & withStylesProps;

function Spacing({
  children,
  all,
  sides,
  ends,
  top,
  right,
  bottom,
  left,
  theme
}: Props) {
  const spacing = `
    ${parseSpacing(theme.ui.unit, [top, ends, all].find(x => x))}
    ${parseSpacing(theme.ui.unit, [right, sides, all].find(x => x))}
    ${parseSpacing(theme.ui.unit, [bottom, ends, all].find(x => x))}
    ${parseSpacing(theme.ui.unit, [left, sides, all].find(x => x))}
  `;

  return <div style={{ margin: spacing }}>{children}</div>;
}

export default withStyles(({}) => ({}), {
  passThemeProp: true
})(Spacing);
