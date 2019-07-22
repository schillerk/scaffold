import * as React from "react";
import { useStateValue } from "../stateManager";

export default function CountControls() {
  // @ts-ignore-next-line
  const [{ count }, dispatch] = useStateValue();

  return (
    <>
      <button
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
