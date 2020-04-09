import React, {useCallback} from 'react';
import { ScreenContainer } from '../styles';
import LoginForm from '../../components/LoginForm';
import StyledImage from '../../components/Image';
import TextLink from '../../components/TextLink';
import { FormContainer } from './styles';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {

  const navigation = useNavigation();

  const onCreateAccountPress = useCallback(
    () => {
      navigation.navigate('CreateAccount');
    },
    [navigation]
  );

  return (
    <ScreenContainer>
      <StyledImage source={require('../../../assets/logo.png')} />
      <FormContainer>
        <LoginForm />
        <TextLink
          text={"CADASTRE-SE"}
          onPress={onCreateAccountPress}
        />
      </FormContainer>
    </ScreenContainer>
  );
};

export default LoginScreen;
