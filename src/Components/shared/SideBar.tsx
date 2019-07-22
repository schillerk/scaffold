import * as React from "react";
import { css, withStyles, withStylesProps } from "Core/withStyles";

import Spacing from "Shared/Spacing";

type Props = {
  width?: number;
} & withStylesProps;

function SideBar({ children, styles, width = 200 }: Props) {
  return (
    <div style={{ width }} {...css(styles.sidebar)}>
      <Spacing all={3}>{children}</Spacing>
    </div>
  );
}

export default withStyles(() => ({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  }
}))(SideBar);
