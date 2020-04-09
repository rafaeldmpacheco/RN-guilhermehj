import React, {useCallback} from 'react';
import { PageContainer } from "../styles";
import {Content, FormContainer} from './styles';
import LoginForm from '../../components/LoginForm';
import SerasaLogo from '../../components/SerasaLogo';
import { useHistory } from 'react-router-dom';
import Link from '../../components/Link';
import FavoriteDishes from '../../components/FavoriteDishes';

const LoginPage = () => {
  const history = useHistory();

  const handleSignUpPress= useCallback(
    () => {
      history.push('/signup');
    },
    [history],
  );


  return (
    <PageContainer>
      <Content>
        <FormContainer>
          <SerasaLogo />
          <LoginForm />
          <Link text={"Cadastrar-se"} onClick={handleSignUpPress}/>
        </FormContainer>
      </Content>
    </PageContainer>
  );
};

export default LoginPage;