import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password1: '',
  password2: ''
};

const validationSchema = Yup.object({
  name: Yup
    .string()
    .min(2, 'Debe tener mínimo 2 caracteres')
    .max(15, 'Debe tener máximo 15 caracteres')
    .required('Requerido'),
  email: Yup
    .string()
    .email('Debe ser un email válido')
    .required('Requerido'),
  password1: Yup
    .string()
    .min(6, 'Debe tener mínimo 6 caracteres')
    .max(20, 'Debe tener máximo 20 caracteres')
    .required('Requerido'),
  password2: Yup
    .string()
    .oneOf([Yup.ref('password1')], 'La contraseña no coincide')
    .required('Requerido'),
});

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {
          (formik) => (
            <Form>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" placeholder="Nazareno" />
              <ErrorMessage name="name" component="span" />
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" placeholder="nazareno@gmail.com" />
              <ErrorMessage name="email" component="span" />
              <label htmlFor="password1">Password</label>
              <Field name="password1" type="password" placeholder="**********" />
              <ErrorMessage name="password1" component="span" />
              <label htmlFor="password2">Repeat Password</label>
              <Field name="password2" type="password" placeholder="**********" />
              <ErrorMessage name="password2" component="span" />
              <button type="submit">Create</button>
              <button onClick={() => { formik.handleReset() }} style={{ marginTop: '8px' }}>
                Reset Form
              </button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
