import * as React from "react";
import { useStateValue } from "../state";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  // @ts-ignore-next-line
  const [{ count }, dispatch] = useStateValue();

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "increment"
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement"
          })
        }
      >
        Decrement
      </button>
      {count}
    </>
  );
}
