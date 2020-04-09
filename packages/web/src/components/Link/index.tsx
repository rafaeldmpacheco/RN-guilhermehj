import React from 'react';
import { A } from './styles';

interface Props {
  text: string;
  onClick: () => void
}

const Link = ({
  text,
  onClick,
}: Props) => {

  return (
    <A href={''} onClick={onClick}>{text}</A>
  );
};

export default Link;