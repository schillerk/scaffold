import * as React from "react";
import { css, withStyles, withStylesProps } from "Core/withStyles";

type Props = {
  width?: number;
} & withStylesProps;

function SideBar({ children, styles, width = 200 }: Props) {
  return (
    <div style={{ width }} {...css(styles.sidebar)}>
      {children}
    </div>
  );
}

export default withStyles(({ color, ui }: withStylesProps) => ({
  sidebar: {
    display: "flex",
    flexDirection: "column"
  }
}))(SideBar);