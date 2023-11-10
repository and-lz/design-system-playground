import { Header as Container } from "./Header.styles";

export interface Props {
  children: string;
}

export function Header(props: Props) {
  const { children } = props;
  return <Container>{children}</Container>;
}
