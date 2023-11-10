import { Meta, StoryFn } from "@storybook/react";
import FlexContainer from "./FlexContainer";
import { ComponentWithChildren } from "../types";

export default {
  title: "FlexContainer",
  component: FlexContainer,
} as Meta;

const Template: StoryFn<ComponentWithChildren> = (args) => (
  <FlexContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div>Sample Grid Content</div>
      <div>Sample Grid Content</div>
      <div>Sample Grid Content</div>
      <div>Sample Grid Content</div>
      <div>Sample Grid Content</div>
      <div>Sample Grid Content</div>
      <div>Sample Grid Content</div>
      <div>Sample Grid Content</div>
      <div>Sample Grid Content</div>
      <div>Sample Grid Content</div>
    </>
  ),
};
