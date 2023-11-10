import { Subtitle as Container } from "./Subtitle.styles";
import { ComponentWithChildren } from "../types";

export const Subtitle = (props: ComponentWithChildren) => {
  const { children } = props;
  return <Container>{children}</Container>;
};
