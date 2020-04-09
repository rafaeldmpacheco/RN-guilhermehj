import React, {useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import { PageContainer } from "../styles";
import { Content, FormContainer } from './styles';
import SerasaLogo from '../../components/SerasaLogo';
import Link from '../../components/Link';
import SignupForm from '../../components/SignupForm';

const SignupPage = () => {
  const history = useHistory();

  const handleLoginPress= useCallback(
    () => {
      history.push('/login');
    },
    [history],
  );


  return (
    <PageContainer>
      <Content>
        <FormContainer>
          <SerasaLogo />
          <SignupForm />
          <Link text={"Login"} onClick={handleLoginPress}/>
        </FormContainer>
      </Content>
    </PageContainer>
  );
};

export default SignupPage;