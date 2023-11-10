import { Meta, StoryFn } from "@storybook/react";
import { Header, Props } from "./Header";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: StoryFn<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Sample Header Text",
};
