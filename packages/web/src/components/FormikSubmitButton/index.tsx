import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from './styles';

interface Props {
  text: string;
}


const FormitSubmitButton = ({
  text
}: Props) => {
  const { submitForm, isValid } = useFormikContext();
  return (
    <Button onClick={submitForm} disabled={!isValid}>
      {text}
    </Button>
  )
};

export default FormitSubmitButton;