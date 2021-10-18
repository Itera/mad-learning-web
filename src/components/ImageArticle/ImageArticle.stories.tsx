import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import ImageArticle from './ImageArticle';


export default {
  title: 'Components/ImageArticle',
  component: ImageArticle,
} as Meta;

const Template: Story<ComponentProps<typeof ImageArticle>> = (args) => (
  <ImageArticle {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  title: 'This is the article title',
  text: 'Here is additional text to describe the article',
  link: 'This text will display a clickable link',
  image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  navigate: '#',
};

