import { useStateValue } from "Core/stateManager";

export default function Header() {
  // @ts-ignore-next-line
  const [{ count }] = useStateValue();

  return count;
}
