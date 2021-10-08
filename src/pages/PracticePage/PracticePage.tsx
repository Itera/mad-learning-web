import React from 'react';
import Footer from 'src/components/Footer';
import HeroImage from 'src/components/HeroImage';
import PracticesSection from '../LevelUpLandingPage/components/PracticesSection';
import { PracticeText, PracticeTextWrapper, PracticeWrapper } from './styled';

function PracticePage() {
  return (
    <PracticeWrapper>
      <HeroImage
        imageSrc="https://fotophono.no/wp-content/uploads/2016/04/oslopanorama.jpg"
        heroTitle="Practices"
      />
      <PracticeTextWrapper>
        <PracticeText>
          Our concept around practices is an important tool to achieve
          competence development across the borders and across departments. To
          be a winning team we need to develop our expertise and to be visible
          as experts from Itera externally in customer relations and other
          events.
        </PracticeText>
      </PracticeTextWrapper>

      <PracticesSection />

      <Footer pageText="Please get in touch if you have any input" />
    </PracticeWrapper>
  );
}

export default PracticePage;
