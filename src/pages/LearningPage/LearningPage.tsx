import React from 'react';
import CutoutImageContainer from 'src/components/CutoutImageContainer';
import Footer from 'src/components/Footer';
import { CutoffImageContainerWrapper } from '../LandingPage/styled';
import { LearningPageContainer } from './styled';

function LearningPage() {
  return (
    <LearningPageContainer>
      <CutoffImageContainerWrapper>
        {' '}
        <CutoutImageContainer
          imageText={'Online courses'}
          imageSrc={
            'https://www.oceanaccess.no/wp-content/uploads/2020/05/rsz_shutterstock_582300589.jpg'
          }
          cutoffMode={'TopRight'}
          navigate={''}
        />
        <CutoutImageContainer
          imageText={'Events'}
          imageSrc={
            'https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
          }
          cutoffMode={'HighBottomLeft'}
          navigate={'/'}
        />
        <CutoutImageContainer
          imageText={'Manager Training'}
          imageSrc={
            'https://data.europa.eu/sites/default/files/news/2020-25-3.jpg'
          }
          cutoffMode={'WideTopLeft'}
          navigate={''}
        />
        <CutoutImageContainer
          imageText={'Stream Archive'}
          imageSrc={
            'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg'
          }
          cutoffMode={'TopLeft'}
          navigate={''}
        />
        <CutoutImageContainer
          imageText={'How to\'s'}
          imageSrc={
            'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'
          }
          cutoffMode={'HighBottomLeft'}
          navigate={''}
        />
      </CutoffImageContainerWrapper>

      <Footer pageText='If you have any questions or inquieries, please contact'/>
    </LearningPageContainer>
  );
}

export default LearningPage;
