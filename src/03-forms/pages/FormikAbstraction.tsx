import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from '../components';

const validationSchema = Yup.object({
  firstName: Yup
    .string()
    .max(15, 'Debe de tener 15 caracteres o menos')
    .required('Requerido'),
  lastName: Yup
    .string()
    .max(15, 'Debe de tener 15 caracteres o menos')
    .required('Requerido'),
  email: Yup
    .string()
    .email('El correo no tiene un formato válido')
    .required('Requerido'),
  terms: Yup
    .boolean()
    .isTrue('Debe aceptar los términos'),
  jobType: Yup
    .string()
    .notOneOf(['it-jr'], 'Esta opción no es permitida')
    .required('Requerido'),
})

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        children={
          () => (
            <Form>
              <MyTextInput name="firstName" label="First Name" />
              <MyTextInput name="lastName" label="Last Name" />
              <MyTextInput name="email" label="Email" />
              <MyCheckbox name="terms" label="Terms & Conditions" />
              <MySelect name="jobType" label="Job Type">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Junior</option>
              </MySelect>
              <button type="submit">Submit</button>
            </Form>
          )
        }
      />
    </div>
  );
};