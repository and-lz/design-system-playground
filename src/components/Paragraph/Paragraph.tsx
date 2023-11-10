import { Paragraph as Container } from "./Paragraph.styles";

export interface Props {
  children: string;
}

export const Paragraph = (props: Props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};
