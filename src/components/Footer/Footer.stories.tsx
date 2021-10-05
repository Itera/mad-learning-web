import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Footer from './Footer';


export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story<ComponentProps<typeof Footer>> = (args) => (
  <Footer {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  pageTitle: 'This is the article title',
};

