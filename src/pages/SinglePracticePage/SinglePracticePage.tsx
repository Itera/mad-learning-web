import React from 'react';
import Footer from 'src/components/Footer';
import HeroPractice from 'src/components/HeroPractice';
import LinkBox from 'src/components/LinkBox';
import { LinkBoxContainer } from 'src/components/LinkBox/styled';
import ShortcutLink from 'src/components/ShortcutLink';
import { ShortcutLinkContainer } from 'src/components/ShortcutLink/styled';
import { Heading, SinglePracticeWrapper } from './styled';

import {
  faBook,
  faCalendar,
  faCertificate,
  faExternalLinkAlt,
  faGraduationCap,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

function SinglePracticePage() {
  return (
    <SinglePracticeWrapper>
      <HeroPractice
        className="single-practice-page__hero-practice"
        linkText={'Link to practices'}
        navigate={'#'}
        title={'Cloud and Software Engineering'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
        buttonText={'Meet the team'}
        buttonNav={'#'}
        imageSrc={
          'https://images.unsplash.com/photo-1599850929872-2dec3cbafd7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
        }
      />

      <LinkBoxContainer className="single-practice-page__link-box-container">
        <LinkBox
          title={'Tools we use'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          icon={faTools}
          navigate="#"
        />
        <LinkBox
          title={'Online resources'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          icon={faGraduationCap}
          navigate="#"
        />
        <LinkBox
          title={'Certifications'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          icon={faCertificate}
          navigate="#"
        />
        <LinkBox
          title={'External Resources'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          icon={faExternalLinkAlt}
          navigate="#"
        />
        <LinkBox
          title={'External Events'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          icon={faCalendar}
          navigate="#"
        />
        <LinkBox
          title={'Recommended Reading'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          icon={faBook}
          navigate="#"
        />
      </LinkBoxContainer>

      <Heading> Relevant Links </Heading>

      <ShortcutLinkContainer className="single-practice-page__shortcut-link-container">
        <ShortcutLink linkText={'Relevant Links'} navigate={'#'} />
        <ShortcutLink linkText={'Practice Resources'} navigate={'#'} />
        <ShortcutLink linkText={'Graphical material'} navigate={'#'} />
        <ShortcutLink linkText={'Our GitHub repo'} navigate={'#'} />
        <ShortcutLink linkText={'Start meeting'} navigate={'#'} />
        <ShortcutLink linkText={'Recorded meetings'} navigate={'#'} />
        <ShortcutLink linkText={'Calendar'} navigate={'#'} />
        <ShortcutLink linkText={'Guidelines'} navigate={'#'} />
        <ShortcutLink linkText={'Book room'} navigate={'#'} />
      </ShortcutLinkContainer>

      <Footer pageText="If you have any feedback to this page or its content, please contact:" />
    </SinglePracticeWrapper>
  );
}

export default SinglePracticePage;
