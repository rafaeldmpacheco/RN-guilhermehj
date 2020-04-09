import React from "react";
import { CreateAccountFormWrapper } from '@serasa/common';

import { Container } from "./styles";
import FormikInput from '../FormikInput';
import FormitSubmitButton from "../FormikSubmitButton";

const SignupForm = () => {

  return (
    <CreateAccountFormWrapper>
      <Container>
        <FormikInput fieldName={"username"} placeholder={"Username"} />
        <FormikInput fieldName={"password"} placeholder={"Password"} type={"password"}/>
        <FormikInput fieldName={"confirmPassword"} placeholder={"Comfirme seu password"} type={"password"}/>
        <FormitSubmitButton text={"Cadastrar"}/>
      </Container>
    </CreateAccountFormWrapper>
  )
};

export default SignupForm;