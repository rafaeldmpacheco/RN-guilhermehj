import * as Yup from 'yup';

let schema = Yup.object().shape({
  username: Yup
    .string()
    .required('Por favor informe o seu username'),
  password: Yup
    .string()
    .required('Por favor informe seu password')
});

export default schema;
