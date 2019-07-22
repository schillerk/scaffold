import * as React from "react";
import { useState } from "react";
import { useStateValue } from "Core/stateManager";

import { Datum } from "../mockData";

import Button from "Shared/Button";
import Dropdown from "Shared/Dropdown";
import DropdownItem from "Shared/DropdownItem";
import Spacing from "Shared/Spacing";
import Title from "Shared/Title";

export default function TimelinePage() {
  // @ts-ignore
  const [{ data }] = useStateValue();
  // @ts-ignore
  const [{ input }, dispatch] = useStateValue();

  const [sortBy, setSortBy] = useState("Most Relevant");
  const [sortByOpen, setSortByOpen] = useState(false);

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
      Sort by
      <Dropdown
        label={sortBy}
        open={sortByOpen}
        onClick={() => setSortByOpen(!sortByOpen)}
        onClickOutside={() => setSortByOpen(false)}
      >
        <DropdownItem
          onClick={() => {
            setSortBy("Most Relevant");
            setSortByOpen(false);
          }}
          label="Most Relevant"
        />
        <DropdownItem
          onClick={() => {
            setSortBy("Most Recent");
            setSortByOpen(false);
          }}
          label="Most Recent"
        />
      </Dropdown>
      {events}
    </div>
  );
}
