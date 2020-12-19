/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
// each export represents a story
// export const Primary = () => <Button variant='primary'>Primary</Button>
// export const Secondary = () => <Button variant='secondary'>Secondary</Button>
