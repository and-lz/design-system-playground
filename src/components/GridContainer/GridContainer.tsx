import { ReactNode } from "react";
import { GridContainer as Container } from "./GridContainer.styles";

interface Props {
  children: ReactNode;
}

function GridContainer(props: Props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

export default GridContainer;
