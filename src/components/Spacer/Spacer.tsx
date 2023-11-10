import { Spacer as Container, Spaces } from "./Space.styles";
import { ComponentWithChildren } from "../types";

interface Props extends ComponentWithChildren {
  size?: Spaces;
}

function Spacer(props: Props) {
  const { children, size } = props;

  return <Container size={size}>{children}</Container>;
}

export default Spacer;
