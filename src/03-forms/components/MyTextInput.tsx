import { ErrorMessage, Field, useField } from "formik"

interface MyTextInputProps {
  name: string,
  label: string,
  type?: string,
}

export const MyTextInput = ({ name, label, type }: MyTextInputProps) => {
  const [field, meta] = useField({ name });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name} type={type ? type : 'text'} />
      <ErrorMessage name={name} component="span" />
    </>
  )
}