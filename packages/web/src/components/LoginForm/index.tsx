import React from "react";
import { LoginFormWrapper } from '@serasa/common';

import { Container } from "./styles";
import FormikInput from '../FormikInput';
import FormitSubmitButton from "../FormikSubmitButton";

const LoginForm = () => {

  return (
    <LoginFormWrapper>
      <Container>
        <FormikInput fieldName={"username"} placeholder={"Username"} />
        <FormikInput fieldName={"password"} placeholder={"Password"} type={"password"}/>
        <FormitSubmitButton text={"Entrar"}/>
      </Container>
    </LoginFormWrapper>
  )
};

export default LoginForm;