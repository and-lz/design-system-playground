import { Meta, StoryFn } from "@storybook/react";
import Button, { Props } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: StoryFn<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  onClick: () => alert("clicked"),
};
