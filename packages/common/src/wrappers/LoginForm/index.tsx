import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useAuthHandlers } from '../../store/hooks';
import validationSchema from './validationSchema';

interface Props {
  children: React.ReactNode
}

export const LoginFormWrapper = ({
  children
}: Props) => {
  const { login } = useAuthHandlers();
  const initialValues = {
    username: '',
    password: '',
  };

  const _handleSubmit = useCallback(
    ({ username, password }) => {
      login(username, password);
    },
    [login]
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={_handleSubmit}
      validationSchema={validationSchema}
    >
      <>
        {children}
      </>
    </Formik>
  );
};