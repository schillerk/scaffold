import * as React from "react";
import { css, withStyles, withStylesProps } from "Core/withStyles";

type Props = {
  onChange: () => {};
  value: string;
} & withStylesProps;

function Button({ styles, onChange, value = "" }: Props) {
  return <input {...css(styles.input)} onChange={onChange} value={value} />;
}

export default withStyles(({ color, transition, ui }: withStylesProps) => ({
  input: {
    border: `${ui.borderWidth}px solid ${color.neutral[3]}`,
    borderRadius: ui.borderRadius,
    color: color.text[1],
    padding: `${ui.unit}px ${2 * ui.unit}px`,
    transition: transition(["border-color", "box-shadow"]),
    ":hover": {
      borderColor: color.primary[3]
    },
    ":focus": {
      outline: 0,
      boxShadow: `0 0 0 2px ${color.primary[0]}`
    }
  }
}))(Button);
