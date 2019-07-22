import * as React from "react";
import { useStateValue } from "Core/stateManager";

import { Datum } from "../mockData";

import Spacing from "Shared/Spacing";
import Input from "Shared/Input";
import Title from "Shared/Title";

export default function TimelinePage() {
  // @ts-ignore
  const [{ data }] = useStateValue();
  // @ts-ignore
  const [{ input }, dispatch] = useStateValue();

  const filteredData = data.filter((datum: Datum) =>
    datum.title.toLowerCase().includes(input.toLowerCase())
  );

  const events = filteredData.map((datum: Datum) => (
    <div key={datum.id}>
      <Spacing all={1}>{datum.title}</Spacing>
    </div>
  ));

  return (
    <div>
      <Title>Timeline</Title>
      <Input
        value={input}
        onChange={(e: any) =>
          dispatch({
            property: "input",
            value: e.target.value
          })
        }
      />
      {events}
    </div>
  );
}
