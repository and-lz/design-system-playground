import { ReactNode } from "react";
import { Subtitle as Container } from "./Subtitle.styles";

interface Props {
  children: ReactNode;
}

export const Subtitle = (props: Props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};
