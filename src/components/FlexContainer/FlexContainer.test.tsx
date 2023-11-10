import { render } from "@testing-library/react";
import FlexContainer from "./FlexContainer";

describe("GridContainer component", () => {
  it("renders children inside GridContainer", () => {
    const { getByText } = render(
      <FlexContainer>
        <div>Hello, World!</div>
      </FlexContainer>
    );

    const childElement = getByText("Hello, World!");
    expect(childElement).toBeInTheDocument();
  });
});
