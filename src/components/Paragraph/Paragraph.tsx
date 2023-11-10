import { ComponentWithChildren } from "../types";
import { Paragraph as Container } from "./Paragraph.styles";

export const Paragraph = (props: ComponentWithChildren) => {
  const { children } = props;
  return <Container>{children}</Container>;
};
