import { Meta, StoryFn } from "@storybook/react";
import GridContainer, { Props } from "./GridContainer";

export default {
  title: "GridContainer",
  component: GridContainer,
} as Meta;

const Template: StoryFn<Props> = (args) => <GridContainer {...args} />;

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
