import React, {useEffect} from 'react';
import { useDishes, useDishesHandlers } from '@serasa/common';
import DishCard from './DishCard';
import { Container, Title, CardsContainer } from './styles';


const FavoriteDishes = () => {
  const dishes = useDishes();
  const { retrieveDishes } = useDishesHandlers();
  useEffect(
    () => {
      retrieveDishes();
    },
    [retrieveDishes]
  );

  return (
    <Container>
      <Title>Comidas Favoritas</Title>
      <CardsContainer>
        {dishes && dishes.map(dish => (<DishCard dish={dish} key={dish.image}/>))}
      </CardsContainer>
    </Container>
  );
};


export default FavoriteDishes;