import * as React from "react";
import { useStateValue } from "Core/stateManager";

import Input from "Shared/Input";
import Title from "Shared/Title";

export default function SummaryPage() {
  // @ts-ignore
  const [{ input }, dispatch] = useStateValue();

  return (
    <div>
      <Title>Summary</Title>
      <Input
        value={input}
        onChange={(e: any) =>
          dispatch({
            property: "input",
            value: e.target.value
          })
        }
      />
    </div>
  );
}
