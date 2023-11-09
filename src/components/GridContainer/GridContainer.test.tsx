import { render } from "@testing-library/react";
import GridContainer from "./GridContainer";

describe("GridContainer component", () => {
  it("renders children inside GridContainer", () => {
    const { getByText } = render(
      <GridContainer>
        <div>Hello, World!</div>
      </GridContainer>
    );

    const childElement = getByText("Hello, World!");
    expect(childElement).toBeInTheDocument();
  });
});
