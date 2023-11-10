import { GridContainer as Container } from "./GridContainer.styles";
import { ComponentWithChildren } from "../types";

function GridContainer(props: ComponentWithChildren) {
  const { children } = props;

  return <Container>{children}</Container>;
}

export default GridContainer;
