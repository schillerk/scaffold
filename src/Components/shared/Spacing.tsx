import * as React from "react";
import { withStyles, withStylesProps } from "Core/withStyles";

type Props = {
  all: number;
} & withStylesProps;

function Spacing({ children, theme, all = 0 }: Props) {
  return <div style={{ margin: theme.ui.unit * all }}>{children}</div>;
}

export default withStyles(() => ({}), {
  passThemeProp: true
})(Spacing);
