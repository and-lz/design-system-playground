import { ReactNode } from "react";
import { Button as Container } from "./Button.styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button(props: Props) {
  const { children, ...rest } = props;

  return <Container {...rest}>{children}</Container>;
}

export default Button;
