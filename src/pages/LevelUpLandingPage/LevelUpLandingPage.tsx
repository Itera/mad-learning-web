import React from 'react';
import Footer from 'src/components/Footer';
import Hero from 'src/components/Hero';
import ImageArticle from 'src/components/ImageArticle';
import EventSection from './components/EventSection';
import LevelUpSection from './components/LevelUpSection';
import OverviewSection from './components/OverviewSection';
import PracticesSection from './components/PracticesSection';
import { TopLeftImage, TopRightImage } from './styled';

export default function LevelUpLandingPage() {
  return (
    <section id="level-up-landing-page">

      <Hero title={'Ready to advance your career today?'}/>
      {/* 
       <CutoffImageContainerWrapper> 
        <CutoutImageContainer imageText={'Join an event'} imageSrc={'https://www.oceanaccess.no/wp-content/uploads/2020/05/rsz_shutterstock_582300589.jpg'} cutoffMode={'TopRight'} navigate={''}/>
        <CutoutImageContainer imageText={'Take an online course'} imageSrc={'https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'} cutoffMode={'HighBottomLeft'} navigate={''}/>
        <CutoutImageContainer imageText={'Management Training'} imageSrc={'https://data.europa.eu/sites/default/files/news/2020-25-3.jpg'} cutoffMode={'WideBottomRight'} navigate={''}/>
        <CutoutImageContainer imageText={'How to`s'} imageSrc={'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg'} cutoffMode={'TopLeft'} navigate={''}/>
      </CutoffImageContainerWrapper>
      */}

      <OverviewSection/>

      <EventSection/>

      <PracticesSection/>

      <LevelUpSection/>

      <ImageArticle 
        title={'Guidelines for external courses and events'}
        text={'Kort tekst om retningslinjer for budsjett og tidsbruk for eksterne kurs og konferanser, samt link til opplæringspolitikk.'}
        link={'Education Policy in Itera'}
        image={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}
        navigate={''}
      />

      <Footer pageText='If you have any feedback related to this page, please get in touch'/>

      {/*
        <TopLeftImage src='https://www.oceanaccess.no/wp-content/uploads/2020/05/rsz_shutterstock_582300589.jpg'/>
        <TopRightImage src='https://www.oceanaccess.no/wp-content/uploads/2020/05/rsz_shutterstock_582300589.jpg'/>
      */}

    </section>
  );
}
