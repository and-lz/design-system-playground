import styled from "styled-components";

export const Shape = styled.div`
  border: var(--border-size-thin) solid var(--neutral-color-2);
  border-radius: var(--radius-size-none);
  padding: var(--spacing-size-sm);
  background-color: var(--neutral-color-1);
  width: 300px;
  display: grid;
  grid-template-rows: 1fr max-content;
`;
