import styled from "styled-components";

export const Button = styled.button`
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
  transition: background 250ms ease;
  will-change: background;
  transition: all 250ms ease;

  &:focus {
    outline: var(--brand-color-primary-4);
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background-color: var(--brand-color-primary-4);
  }
`;
