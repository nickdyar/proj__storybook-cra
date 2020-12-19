import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  parameters: {
    component: Button
  }
}

// each export represents a story
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>