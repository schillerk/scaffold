import * as React from "react";
import { StateContext } from "../App";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <StateContext.Consumer>
      {value => <div>{value.counter}</div>}
    </StateContext.Consumer>
  );
}
