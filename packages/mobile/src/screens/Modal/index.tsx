import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from "../styles";
import {MainStackParamList} from '../../routes/MainNavigator';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import { ModalContainer, MessageContainer } from './styles';

export type ModalScreenRouteParams = RouteProp<MainStackParamList, 'Modal'>;


const ModalScreen = () => {
  const route = useRoute<ModalScreenRouteParams>();
  const {
    text,
    duration,
    fallbackRoute,
    type,
  } = route.params;

  const navigation = useNavigation();

  useEffect(
    () => {
      if (fallbackRoute) {
        setTimeout(navigation.navigate, duration || 1500, fallbackRoute);
      } else {
        setTimeout(navigation.goBack, duration || 1500);
      }
    },
    []
  );

  return (
    <ModalContainer>
      <MessageContainer type={type}>
        <Text style={{ color: 'white' }}>{text}</Text>
      </MessageContainer>
    </ModalContainer>
  )
};

export default ModalScreen;