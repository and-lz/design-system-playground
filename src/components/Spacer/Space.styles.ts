import styled from "styled-components";

export type Spaces =
  | "quarck"
  | "nano"
  | "xxxs"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl"
  | "huge"
  | "giant";

interface Props {
  size?: Spaces;
}

export const Spacer = styled.div<Props>`
  margin-bottom: ${(props) => `var(--spacing-size-${props.size})` || "1rem"};
`;
