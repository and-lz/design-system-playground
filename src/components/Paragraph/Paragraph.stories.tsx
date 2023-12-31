import { Meta, StoryFn } from "@storybook/react";
import { Paragraph } from "./Paragraph";
import { ComponentWithChildren } from "../types";

export default {
  title: "Paragraph",
  component: Paragraph,
} as Meta;

const Template: StoryFn<ComponentWithChildren> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Sample paragraph text goes here.",
};
