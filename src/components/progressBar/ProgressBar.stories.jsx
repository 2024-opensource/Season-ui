import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    progress: {
      control: { type: 'number', min: 0 },
      description: '현재 진행 정도',
    },
    max: {
      control: { type: 'number', min: 5 },
      description: 'progress bar의 최대값',
    },
  },
};

const Template = args => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  max: 100,
};
