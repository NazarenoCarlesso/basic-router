import { ErrorMessage, Field, useField } from "formik";
import { ReactElement } from "react";

interface MySelectProps {
  children: ReactElement[] | ReactElement | undefined,
  name: string,
  label: string,
  placeholder?: string,
}

export const MySelect = ({ children, name, label, placeholder }: MySelectProps) => {
  const [field] = useField({ name });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        as="select"
        style={{ color: field.value === '' ? 'grey' : 'white' }}>
        <option value="">{placeholder}</option>
        {children}
      </Field>
      <ErrorMessage name={name} component="span" />
    </>
  )
};