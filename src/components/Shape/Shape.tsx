import { ComponentWithChildren } from "../types";
import { Shape as Container } from "./Shape.styles";

export function Shape(props: ComponentWithChildren) {
  return <Container>{props.children}</Container>;
}
