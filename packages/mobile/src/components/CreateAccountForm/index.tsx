import React from 'react';
import { CreateAccountFormWrapper } from '@serasa/common';
import FormikInput from '../FormikInput';
import { Container } from './styles';
import FormikSubmitButton from '../FormikSubmitButton';

const CreateAccountForm = () => {

  return (
    <Container>
      <CreateAccountFormWrapper>
        <FormikInput
          fieldName={"username"}
          placeholder={"Username"}
        />
        <FormikInput
          fieldName={"password"}
          placeholder={"Password"}
          secureTextEntry
        />
        <FormikInput
          fieldName={"confirmPassword"}
          placeholder={"Confirme seu password"}
          secureTextEntry
        />
        <FormikSubmitButton text="CADASTRAR" />
      </CreateAccountFormWrapper>
    </Container>
  );
};

export default CreateAccountForm;