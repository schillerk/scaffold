import * as React from "react";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return <div>{title}</div>;
}
