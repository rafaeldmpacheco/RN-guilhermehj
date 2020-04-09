import React from 'react';
import { ButtonText, StyledTouchable } from './styles';
import { useFormikContext } from 'formik';

interface Props {
  text: string;
}

const FormikSubmitButton = ({
  text,
}: Props) => {
  const { submitForm, isValid } = useFormikContext();
  return (
    <StyledTouchable onPress={submitForm} disabled={!isValid}>
      <ButtonText>
        {text}
      </ButtonText>
    </StyledTouchable>
  );
};

export default FormikSubmitButton;