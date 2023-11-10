import { Meta, StoryFn } from "@storybook/react";
import { Paragraph, Props } from "./Paragraph";

export default {
  title: "Paragraph",
  component: Paragraph,
} as Meta;

const Template: StoryFn<Props> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Sample paragraph text goes here.",
};
