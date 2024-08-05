import { ErrorMessage, Field } from "formik";

interface MyCheckboxProps {
  name: string,
  label: string,
}

export const MyCheckbox = ({ name, label }: MyCheckboxProps) => {
  return (
    <>
      <label htmlFor={name}>
        <Field name={name} type="checkbox" />
        {label}
      </label>
      <ErrorMessage name={name} component="span" />
    </>
  )
};
