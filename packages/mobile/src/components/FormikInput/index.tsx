import React, {useCallback} from 'react';
import { useField } from 'formik';
import { StyledInput, Error } from './styles';

interface Props {
  fieldName: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const FormikInput = ({
  fieldName,
  placeholder,
  secureTextEntry,
}: Props) => {
  const [field, meta, helpers] = useField(fieldName);

  const handleChangeText = useCallback(
    (text: string) => {
      helpers.setValue(text);
    },
    [helpers]
  );

  return (
    <>
      <StyledInput
        value={field.value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {meta.error && <Error>{meta.error}</Error>}
    </>
  );
};

export default FormikInput;