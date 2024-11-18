import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: { control: 'number', description: '카드의 너비(px)' },
    title: { control: 'text', description: '카드의 제목' },
    description: { control: 'text', description: '카드의 설명' },
    buttonText: { control: 'text', description: '버튼의 텍스트' },
    imageSrc: { control: 'text', description: '이미지 경로' },
  },
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
