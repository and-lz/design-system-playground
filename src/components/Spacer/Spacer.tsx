import { ReactNode } from "react";
import { Spacer as Container, Spaces } from "./Space.styles";

interface Props {
  children: ReactNode;
  size?: Spaces;
}

function Spacer(props: Props) {
  const { children, size } = props;

  return <Container size={size}>{children}</Container>;
}

export default Spacer;
