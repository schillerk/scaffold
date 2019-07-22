import * as React from "react";
import { useStateValue } from "../stateManager";
import { StyleSheet, css } from "aphrodite";

export default function CountControls() {
  // @ts-ignore-next-line
  const [{ count }, dispatch] = useStateValue();

  return (
    <>
      <button
        className={css(styles.button)}
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
        className={css(styles.button)}
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

const styles = StyleSheet.create({
  button: {
    padding: 8
  }
});
