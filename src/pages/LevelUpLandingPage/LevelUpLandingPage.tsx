import React from 'react';
import Footer from 'src/components/Footer';
import Hero from 'src/components/Hero';
import ImageArticle from 'src/components/ImageArticle';
import EventSection from './components/EventSection';
import LevelUpSection from './components/LevelUpSection';
import OverviewSection from './components/OverviewSection';
import PracticesSection from './components/PracticesSection';

export default function LevelUpLandingPage() {
  return (
    <section id="level-up-landing-page">

      <Hero title={'Ready to advance your career today?'}/>
      
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

    </section>
  );
}
