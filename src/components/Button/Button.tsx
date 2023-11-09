import { ReactNode } from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonContainer = styled.button`
  font-size: var(--font-size-xs);
  line-height: var(--line-height-tight);
  border-radius: var(--radius-size-none);
  border: var(--border-size-none);
  padding: var(--spacing-squish-size-sm-v) var(--spacing-squish-size-sm-h);
  font-family: var(--font-family-highlight);
  font-weight: var(--font-weight-medium);
  color: var(--neutral-color-1);
  background-color: var(--brand-color-primary-3);
  cursor: pointer;

  &:hover {
    background-color: var(--brand-color-primary-4);
  }
`;

function Button(props: Props) {
  const { children, ...rest } = props;

  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
}

export default Button;
