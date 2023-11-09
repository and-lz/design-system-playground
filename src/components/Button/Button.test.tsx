import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders a button with provided children", () => {
    const { getByText } = render(<Button>Hello, World!</Button>);
    const buttonElement = getByText("Hello, World!");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("BUTTON");
  });

  it("passes additional props to the button element", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const buttonElement = getByText("Click me");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("BUTTON");

    buttonElement.click();
    expect(onClick).toHaveBeenCalled();
  });
});
