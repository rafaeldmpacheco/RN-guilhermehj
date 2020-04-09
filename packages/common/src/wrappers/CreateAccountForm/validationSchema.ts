import * as Yup from 'yup';

let schema = Yup.object().shape({
  username: Yup
    .string()
    .required('Por favor informe o seu username'),
  password: Yup
    .string()
    .required('Por favor informe seu password'),
  confirmPassword: Yup.string()
    .required('Por favor confirme seu password')
    .oneOf([Yup.ref('password'), null], 'Seu password deve ser igual.')
});

export default schema;
