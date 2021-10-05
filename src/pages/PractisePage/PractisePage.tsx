import React from 'react';
import Footer from 'src/components/Footer';
import HeroImage from 'src/components/HeroImage';
import PracticesSection from './Components/PracticesSection';
import {
  PractiseText,
  PractiseTextWrapper,
  PractiseWrapper,
  Space,
} from './styled';

function PractisePage() {
  return (
    <PractiseWrapper>
      <HeroImage
        imageSrc="https://fotophono.no/wp-content/uploads/2016/04/oslopanorama.jpg"
        heroTitle="Practises"
      />
      <PractiseTextWrapper>
        <PractiseText>
          Our concept around practises is an important tool to achieve
          competence development across the borders and across departments. To
          be a winning team we need to develop our expertise and to be visible
          as experts from Itera externally in customer relations and other
          events.
        </PractiseText>
      </PractiseTextWrapper>
      <PracticesSection />
      <Space />
      <Footer pageText="Please get in touch if you have any input" />
    </PractiseWrapper>
  );
}

export default PractisePage;
