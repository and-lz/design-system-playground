import { Meta, StoryFn } from "@storybook/react";
import { Header } from "./Header";
import { ComponentWithChildren } from "../types";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: StoryFn<ComponentWithChildren> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Sample Header Text",
};
