import * as React from "react";
import { useStateValue } from "Core/stateManager";

import Button from "Shared/Button";

export default function CountControls() {
  // @ts-ignore-next-line
  const [{ count }, dispatch] = useStateValue();

  return (
    <>
      <Button
        onClick={() =>
          dispatch({
            property: "count",
            type: "increment"
          })
        }
      >
        Increment
      </Button>
      <Button
        onClick={() =>
          dispatch({
            property: "count",
            type: "decrement"
          })
        }
      >
        Decrement
      </Button>
    </>
  );
}
