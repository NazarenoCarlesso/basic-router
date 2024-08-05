import { ErrorMessage, Field } from "formik"

interface MyTextInputProps {
  name: string,
  label: string,
  type?: string,
  placeholder?: string,
}

export const MyTextInput = ({ name, label, type, placeholder }: MyTextInputProps) => {
  // const [field, meta] = useField({ name });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name} type={type ? type : 'text'} placeholder={placeholder} />
      <ErrorMessage name={name} component="span" />
    </>
  )
}