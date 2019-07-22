import * as React from "react";
import { useStateValue } from "Core/stateManager";
import Input from "Shared/Input";

export default function SummaryPage() {
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
