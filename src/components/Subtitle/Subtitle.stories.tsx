import { Meta, StoryFn } from "@storybook/react";
import { Subtitle } from "./Subtitle";
import { ComponentWithChildren } from "../types";

export default {
  title: "Subtitle",
  component: Subtitle,
} as Meta;

const Template: StoryFn<ComponentWithChildren> = (args) => (
  <Subtitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Sample Subtitle Text",
};
