import { Meta, StoryFn } from "@storybook/react";
import { Card, Props } from "./Card";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: StoryFn<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Sample Heading",
  subtitle: "Sample Subtitle",
  paragraph: "Sample paragraph text goes here.",
  buttonLabel: "Click Me",
};
