import React, {useCallback} from 'react';
import { useField } from 'formik';
import { Input, Error } from './styles';

interface Props {
  fieldName: string;
  type?: string;
  placeholder?: string;
}

const FormikInput = ({
  fieldName,
  placeholder,
  type,
}: Props) => {
  const [field, meta, helpers] = useField(fieldName);

  const handleChangeText = useCallback(
    (event) => {
      helpers.setValue(event.target.value);
    },
    [helpers]
  );

  return (
    <>
      <Input
        value={field.value}
        placeholder={placeholder}
        onChange={handleChangeText}
        type={type}
      />
      {meta.error && <Error>{meta.error}</Error>}
    </>
  );
};

export default FormikInput;