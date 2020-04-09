import React from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '../styles';
import FavoriteDishes from '../../components/FavoriteDishes';

const FavoriteDishesScreen = () => {
  return (
    <ScreenContainer>
      <FavoriteDishes />
    </ScreenContainer>
  );
};

export default FavoriteDishesScreen;
