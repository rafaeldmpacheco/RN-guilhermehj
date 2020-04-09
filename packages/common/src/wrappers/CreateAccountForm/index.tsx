import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useAuthHandlers } from '../../store/hooks';
import validationSchema from './validationSchema';

interface Props {
  children: React.ReactNode
}

export const CreateAccountFormWrapper = ({
  children
}: Props) => {
  const { createAccount } = useAuthHandlers();
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const _handleSubmit = useCallback(
    ({ username, password }) => {
      createAccount(username, password);
    },
    [createAccount]
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