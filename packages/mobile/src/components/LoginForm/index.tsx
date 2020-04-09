import React from 'react';
import { LoginFormWrapper } from '@serasa/common';
import FormikInput from '../FormikInput';
import { Container } from './styles';
import FormikSubmitButton from '../FormikSubmitButton';

const LoginForm = () => {

  return (
    <Container>
      <LoginFormWrapper>
        <FormikInput
          fieldName={"username"}
          placeholder={"Username"}
        />
        <FormikInput
          fieldName={"password"}
          placeholder={"Password"}
          secureTextEntry
        />
        <FormikSubmitButton text="ENTRAR" />
      </LoginFormWrapper>
    </Container>
  );
};

export default LoginForm;