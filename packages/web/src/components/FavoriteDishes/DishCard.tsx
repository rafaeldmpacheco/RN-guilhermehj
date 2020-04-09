import React from 'react';
import { Dish } from '@serasa/common';
import {CardImage, DishCardContainer, DishCardDescription} from './styles';

interface Props {
  dish: Dish;
}

const DishCard = ({
 dish,
}: Props) => {
  return (
    <DishCardContainer>
      <CardImage src={dish.image}/>
      <DishCardDescription>
        {dish.description}
      </DishCardDescription>
    </DishCardContainer>
  )
};

export default DishCard;