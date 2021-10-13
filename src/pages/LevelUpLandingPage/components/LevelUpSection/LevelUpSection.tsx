import React from 'react';
import { Link, Section, SplitContainer, ContainerItem } from './styled';

export default function LevelUpSection() {
  return (
    <Section>
      <SplitContainer>
        <ContainerItem>
          <iframe
            title="Level up"
            width="560"
            height="315"
            src="https://web.microsoftstream.com/embed/video/36c2e048-c8e6-425b-b073-775c0271e248?autoplay=false&showinfo=true"
          />
        </ContainerItem>

        <ContainerItem>
          <h2>The Itera Academy For Professional Development</h2>
          <p>
            Competence Development is one of the most important activities in
            Itera. It is critical for us to be able develop our employees and
            build the competences needed now and in the future.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            laboriosam excepturi eos nemo dolores inventore aliquid quaerat.
          </p>
          <Link href="#">About Level Up</Link>
        </ContainerItem>
      </SplitContainer>
    </Section>
  );
}
