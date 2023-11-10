import { ComponentWithChildren } from "../types";
import { Header as Container } from "./Header.styles";

export function Header(props: ComponentWithChildren) {
  const { children } = props;
  return <Container>{children}</Container>;
}
