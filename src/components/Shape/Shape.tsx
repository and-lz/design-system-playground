import { Shape as Container } from "./Shape.styles";

export const Shape = ({ ...props }) => {
  return <Container>{props.children}</Container>;
};
