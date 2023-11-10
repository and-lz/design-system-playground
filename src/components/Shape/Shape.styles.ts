import styled from "styled-components";

export const Shape = styled.div`
  border: var(--border-size-thin) solid var(--neutral-color-2);
  border-radius: var(--radius-size-none);
  padding: var(--spacing-size-sm);
  background-color: var(--neutral-color-1);
  width: 30ch;
  display: grid;
  grid-template-rows: 1fr max-content;
  transition: all 250ms ease;

  &:focus-within {
    border-color: var(--brand-color-primary-3);
    scale: 0.95;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  }
`;
