import * as React from "react";
import { useStateValue } from "../stateManager";
import { css, withStyles, withStylesProps } from "../withStyles";

function CountControls({ styles }: withStylesProps) {
  // @ts-ignore-next-line
  const [{ count }, dispatch] = useStateValue();

  return (
    <>
      <button
        {...css(styles.button)}
        onClick={() =>
          dispatch({
            property: "count",
            type: "increment"
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            property: "count",
            type: "decrement"
          })
        }
      >
        Decrement
      </button>
    </>
  );
}

export default withStyles(({ color }: withStylesProps) => ({
  button: {
    background: color.primary
  }
}))(CountControls);
