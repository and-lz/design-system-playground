import { render } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

describe("Paragraph component", () => {
  it("renders the provided text", () => {
    const text = "Example Paragraph Text";
    const { getByText } = render(<Paragraph>{text}</Paragraph>);
    const paragraphElement = getByText(text);
    expect(paragraphElement).toBeInTheDocument();
  });
});
