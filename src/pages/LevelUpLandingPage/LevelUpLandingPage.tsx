import React from 'react';
import CutoutImageContainer from 'src/components/CutoutImageContainer';
import Footer from 'src/components/Footer';
import Hero from 'src/components/Hero';
import EventSection from './components/EventSection';
import LevelUpSection from './components/LevelUpSection';
import PracticesSection from './components/PracticesSection';
import { CutoffImageContainerWrapper } from './styled';

export default function LevelUpLandingPage() {
  return (
    <section id="level-up-landing-page">

      <Hero title={'Ready to advance your career today?'}/>

      <CutoffImageContainerWrapper> 
        <CutoutImageContainer imageText={'Join an event'} imageSrc={'https://www.oceanaccess.no/wp-content/uploads/2020/05/rsz_shutterstock_582300589.jpg'} cutoffMode={'TopRight'} navigate={''}/>
        <CutoutImageContainer imageText={'Take an online course'} imageSrc={'https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'} cutoffMode={'HighBottomLeft'} navigate={''}/>
        <CutoutImageContainer imageText={'Management Training'} imageSrc={'https://data.europa.eu/sites/default/files/news/2020-25-3.jpg'} cutoffMode={'WideTopLeft'} navigate={''}/>
        <CutoutImageContainer imageText={'How to`s'} imageSrc={'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg'} cutoffMode={'BottomRight'} navigate={''}/>
      </CutoffImageContainerWrapper>

      <EventSection/>

      <PracticesSection/>

      <LevelUpSection/>

      <Footer pageText='If you have any feedback related to this page, please get in touch'/>


    </section>
  );
}
