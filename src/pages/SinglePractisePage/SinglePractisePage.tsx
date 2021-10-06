import {
  faBook,
  faCalendar,
  faCertificate,
  faExternalLinkAlt,
  faGraduationCap,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Footer from 'src/components/Footer';
import HeroPractise from 'src/components/HeroPractise';
import LinkBox from 'src/components/LinkBox';
import ShortcutLink from 'src/components/ShortcutLink';
import { LinkBoxContainer } from '../LandingPage/styled';
import {
  Heading,
  ShortcutLinkContainer,
  SinglePractiseWrapper,
  Space,
} from './styled';

function SinglePractisePage() {
  return (
    <SinglePractiseWrapper>
      <HeroPractise
        link={'Link to practises'}
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

      <Space/>
      <Space/>

      <LinkBoxContainer>
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

      <Space/>

      <Heading> Relevant Links </Heading>

      <ShortcutLinkContainer>
        <ShortcutLink linkText={'Relevant Links'} navigate={'#'} />
        <ShortcutLink linkText={'Practise Resources'} navigate={'#'} />
        <ShortcutLink linkText={'Graphical material'} navigate={'#'} />
        <ShortcutLink linkText={'Our GitHub repo'} navigate={'#'} />
        <ShortcutLink linkText={'Start meeting'} navigate={'#'} />
        <ShortcutLink linkText={'Recorded meetings'} navigate={'#'} />
        <ShortcutLink linkText={'Calendar'} navigate={'#'} />
        <ShortcutLink linkText={'Guidelines'} navigate={'#'} />
        <ShortcutLink linkText={'Book room'} navigate={'#'} />
      </ShortcutLinkContainer>

      <Space/>

      <Footer pageText="If you have any feedback to this page or its content, please contact:"/>
    </SinglePractiseWrapper>
  );
}

export default SinglePractisePage;
