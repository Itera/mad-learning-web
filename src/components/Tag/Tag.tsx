import React from 'react';
import COLORS from 'src/config/colors';
import { TagContainer } from './styled';

type TagProps = {
  selected?: boolean;
  onClick?: () => void;
  primaryColor?: string;
  secondaryColor?: string;
  small?: boolean;
  large?: boolean;
  children: string;
};

export default function Tag({
  onClick,
  children,
  small,
  large,
  selected = true,
  primaryColor = COLORS.ON.PRIMARY_ACCENT,
  secondaryColor = COLORS.SURFACE.PRIMARY,
}: TagProps) {
  let fontSize = 'medium';
  fontSize = small ? 'small' : fontSize;
  fontSize = large ? 'large' : fontSize;

  const theme = {
    backgroundColor: selected ? primaryColor : secondaryColor,
    foregroundColor: selected ? secondaryColor : primaryColor,
    fontSize,
  };

  return (
    <TagContainer theme={theme} onClick={onClick}>
      {children}
    </TagContainer>
  );
}
