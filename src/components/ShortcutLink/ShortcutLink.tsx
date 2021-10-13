import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  ShortcutBorder,
  ShortcutLinkField,
  ShortcutLinkText,
  ShortcutLinkWrapper,
} from './styled';

type ShortcutLinkProps = {
  linkText: string;
  navigate: string;
};

function ShortcutLink({ linkText, navigate }: ShortcutLinkProps) {
  return (
    <ShortcutLinkWrapper href={navigate}>
      <ShortcutLinkField>
        <ShortcutLinkText>{linkText}</ShortcutLinkText>
        <FontAwesomeIcon icon={faChevronRight} size={'2x'} />
      </ShortcutLinkField>
      <ShortcutBorder />
    </ShortcutLinkWrapper>
  );
}

export default ShortcutLink;
