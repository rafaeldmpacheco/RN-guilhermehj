import React from 'react';
import { Text } from 'react-native';
import { Dish } from '@serasa/common';
import { DishCardContainer, DishCardImage, Description } from './styles';

interface Props {
  dish: Dish;
}

const DishCard = ({
  dish,
}: Props) => {
  return (
    <DishCardContainer>
      <DishCardImage source={{ uri: dish.image }}/>
      <Description>{dish.description}</Description>
    </DishCardContainer>
  )
};

export default DishCard;