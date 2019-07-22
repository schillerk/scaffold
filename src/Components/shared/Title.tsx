import * as React from "react";
import { css, withStyles, withStylesProps } from "Core/withStyles";

function Title({ children, styles }: withStylesProps) {
  return <div {...css(styles.title)}>{children}</div>;
}

export default withStyles(({ color, ui, transition }: withStylesProps) => ({
  title: {
    color: color.text[1],
    fontSize: ui.fontSize.large
  }
}))(Title);
