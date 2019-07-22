import * as React from "react";
import { useStateValue } from "Core/stateManager";

export default function Input() {
  // @ts-ignore-next-line
  const [{ input }, dispatch] = useStateValue();

  return (
    <input
      type="text"
      value={input}
      onChange={e =>
        dispatch({
          property: "input",
          value: e.target.value
        })
      }
    />
  );
}
