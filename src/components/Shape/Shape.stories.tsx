import { Meta, StoryFn } from "@storybook/react";
import { Shape } from "./Shape";
export default {
  title: "Shape",
  component: Shape,
} as Meta;

const Template: StoryFn = (args) => <Shape {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    "Content goes here Content goes here Content goes here Content goes here",
};
