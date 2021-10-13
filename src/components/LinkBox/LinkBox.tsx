import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

import {
  LinkBoxText,
  LinkBoxTitle,
  LinkBoxWrapper,
  TextWrapper,
} from './styled';

type LinkBoxProps = {
  title: string;
  text: string;
  icon: IconDefinition;
  navigate: string;
};

function LinkBox({ title, text, icon, navigate }: LinkBoxProps) {
  return (
    <LinkBoxWrapper href={navigate}>
      <FontAwesomeIcon icon={icon} size={'2x'} />
      <TextWrapper>
        <LinkBoxTitle>{title}</LinkBoxTitle>
        <LinkBoxText>{text}</LinkBoxText>
      </TextWrapper>
    </LinkBoxWrapper>
  );
}

export default LinkBox;
