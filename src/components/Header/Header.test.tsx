import { render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders the provided text", () => {
    const text = "Example Header Text";
    const { getByText } = render(<Header>{text}</Header>);
    const headerElement = getByText(text);
    expect(headerElement).toBeInTheDocument();
  });
});
