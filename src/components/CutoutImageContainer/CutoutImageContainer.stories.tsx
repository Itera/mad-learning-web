import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import CutoutImageContainer from './CutoutImageContainer';

export default {
  title: 'Components/CutoutImageContainer',
  component: CutoutImageContainer,
} as Meta;

const Template: Story<ComponentProps<typeof CutoutImageContainer>> = (args) => (
  <CutoutImageContainer {...args} />
);

export const TopLeft = Template.bind({});
export const TopRight = Template.bind({});
export const BottomLeft = Template.bind({});
export const BottomRight = Template.bind({});
export const WideTopLeft = Template.bind({});
export const WideTopRight = Template.bind({});
export const WideBottomLeft = Template.bind({});
export const WideBottomRight = Template.bind({});
export const HighTopLeft = Template.bind({});
export const HighTopRight = Template.bind({});
export const HighBottomLeft = Template.bind({});
export const HighBottomRight = Template.bind({});

TopLeft.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'TopLeft',
  navigate: '#',
};

TopRight.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'TopRight',
  navigate: '#',
};

BottomLeft.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'BottomLeft',
  navigate: '#',
};

BottomRight.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'BottomRight',
  navigate: '#',
};

WideTopLeft.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'WideTopLeft',
  navigate: '#',
};

WideTopRight.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'WideTopRight',
  navigate: '#',
};

WideBottomLeft.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'WideBottomLeft',
  navigate: '#',
};

WideBottomRight.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'WideBottomRight',
  navigate: '#',
};

HighTopLeft.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'HighTopLeft',
  navigate: '#',
};

HighTopRight.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'HighTopRight',
  navigate: '#',
};

HighBottomLeft.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'HighBottomLeft',
  navigate: '#',
};

HighBottomRight.args = {
  imageText: 'Here is the title',
  imageSrc:
    'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg',
  cutoffMode: 'HighBottomRight',
  navigate: '#',
};
