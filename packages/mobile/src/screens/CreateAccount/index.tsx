import React, { useCallback } from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/core';

import StyledImage from '../../components/Image';
import CreateAccountForm from '../../components/CreateAccountForm';
import TextLink from '../../components/TextLink';

import { ScreenContainer } from '../styles';
import { FormContainer } from './styles';

const CreateAccountScreen = () => {
  const navigation = useNavigation();

  const onLoginPress = useCallback(
    () => {
      navigation.navigate('Login');
    },
    [navigation]
  );


  return (
    <ScreenContainer>
      <StyledImage source={require('../../../assets/logo.png')} />
      <FormContainer>
        <CreateAccountForm />
        <TextLink
          text={"LOGIN"}
          onPress={onLoginPress}
        />
      </FormContainer>
    </ScreenContainer>
  );
};

export default CreateAccountScreen;