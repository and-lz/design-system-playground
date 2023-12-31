import { render } from "@testing-library/react";
import { Card, Props } from "./Card";
import Button from "../Button/Button";

describe("Card component", () => {
  const testData: Props = {
    heading: "Test Heading",
    subtitle: "Test Subtitle",
    paragraph: "Test Paragraph",
    children: <Button>Test Button</Button>,
  };

  it("renders Card with correct props", () => {
    render(<Card {...testData} />);
    expect(document.querySelector("header")?.textContent).toBe("Test Heading");
    expect(document.querySelector("h2")?.textContent).toBe("Test Subtitle");
    expect(document.querySelector("p")?.textContent).toBe("Test Paragraph");
    expect(document.querySelector("button")?.textContent).toBe("Test Button");
  });
});
