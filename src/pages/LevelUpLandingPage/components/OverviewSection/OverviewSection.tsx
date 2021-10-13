import React from 'react';
import { Section, ShortcutContainer, ShortcutItem } from './styled';

import CutoutImageContainer from 'src/components/CutoutImageContainer';

export default function OverviewSection() {
  return (
    <Section>
      <h2>Join us for some MAD learning!</h2>
      <ShortcutContainer>
        <ShortcutItem>
          <CutoutImageContainer
            imageText={'Take an online course'}
            imageSrc={
              'https://www.oceanaccess.no/wp-content/uploads/2020/05/rsz_shutterstock_582300589.jpg'
            }
            cutoffMode={'TopRight'}
            navigate={''}
          />
        </ShortcutItem>

        <ShortcutItem>
          <CutoutImageContainer
            imageText={'Join an event'}
            imageSrc={
              'https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
            }
            cutoffMode={'HighBottomLeft'}
            navigate={''}
          />
        </ShortcutItem>

        <ShortcutItem>
          <CutoutImageContainer
            imageText={'Management training'}
            imageSrc={
              'https://data.europa.eu/sites/default/files/news/2020-25-3.jpg'
            }
            cutoffMode={'WideTopLeft'}
            navigate={''}
          />
        </ShortcutItem>

        <ShortcutItem>
          <CutoutImageContainer
            imageText={"How to's"}
            imageSrc={
              'https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg'
            }
            cutoffMode={'BottomRight'}
            navigate={''}
          />
        </ShortcutItem>
      </ShortcutContainer>
    </Section>
  );
}
