/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;
  if (input.validations.length === 0) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Requerido');
    }
    // otras reglas...
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      {/* <code>{JSON.stringify(formJson)}</code> */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {
          () => (
            <Form>
              {
                formJson.map(({ type, name, label, placeholder, options }) => {
                  if (type === 'input' || type === 'password' || type === 'text' || type === 'email')
                    return (
                      <MyTextInput
                        key={name}
                        type={type}
                        label={label}
                        name={name}
                        placeholder={placeholder}
                      />
                    )
                  if (type === 'select')
                    return (
                      <MySelect
                        key={name}
                        name={name}
                        label={label}
                        placeholder={placeholder}>
                        {
                          options?.map(({ id, label }) => (
                            <option key={id} value={id}>{label}</option>
                          ))
                        }
                      </MySelect>
                    )
                  return <span key={name}>Type: {type} no es soportado</span>
                })
              }
              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
