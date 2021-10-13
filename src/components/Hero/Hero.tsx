import React, { ReactNode } from 'react';
import { Header, Section } from './styled';

type HeroProps = {
  title: string;
  children?: ReactNode;
};

export default function Hero({ title, children }: HeroProps) {
  return (
    <Section>
      {children}
      <Header>{title}</Header>
    </Section>
  );
}
