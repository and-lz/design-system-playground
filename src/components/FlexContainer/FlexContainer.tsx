import { GridContainer as Container } from "./FlexContainer.styles";
import { ComponentWithChildren } from "../types";

function FlexContainer(props: ComponentWithChildren) {
  const { children } = props;

  return <Container>{children}</Container>;
}

export default FlexContainer;
