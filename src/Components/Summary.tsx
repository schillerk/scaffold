import * as React from "react";
import { css, withStyles, withStylesProps } from "Core/withStyles";
import { useStateValue } from "Core/stateManager";
import Input from "Shared/Input";

function Summary({ children }: withStylesProps) {
  // @ts-ignore
  const [{ input }, dispatch] = useStateValue();

  return (
    <Input
      value={input}
      onChange={(e: any) =>
        dispatch({
          property: "input",
          value: e.target.value
        })
      }
    />
  );
}

export default withStyles(({ color, ui }: withStylesProps) => ({
  sidebar: {
    display: "flex",
    flexDirection: "column"
  }
}))(Summary);
