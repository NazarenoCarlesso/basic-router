import { ErrorMessage, Field } from "formik";
import { ReactElement } from "react";

interface MySelectProps {
  children: ReactElement[],
  name: string,
  label: string,
}

export const MySelect = ({ children, name, label }: MySelectProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name} as="select">
        {children}
      </Field>
      <ErrorMessage name={name} component="span" />
    </>
  )
};