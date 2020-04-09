import React, {useEffect} from 'react';

import { useDishes, useDishesHandlers } from '@serasa/common';
import DishCard from './DishCard';
import {ScrollView} from 'react-native';
import { Container, Title } from './styles';


const FavoriteDishes = () => {
  const dishes = useDishes();
  const { retrieveDishes } = useDishesHandlers();

  useEffect(
    () => {
      retrieveDishes();
    },
    []
  );

  return (
    <Container>
      <Title>Comidas Favoritas</Title>
      <ScrollView>
        {dishes && dishes.map(dish => (<DishCard dish={dish} key={dish.image}/>))}
      </ScrollView>
    </Container>
  );
};


export default FavoriteDishes;