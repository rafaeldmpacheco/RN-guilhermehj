import React from 'react';
import { StyledLink } from './styles';

interface Props {
  text: string;
  onPress: () => void;
}

const TextLink = ({
  text,
  onPress,
}: Props) => {

  return (
    <StyledLink onPress={onPress}>
      {text}
    </StyledLink>
  );
};

export default TextLink;