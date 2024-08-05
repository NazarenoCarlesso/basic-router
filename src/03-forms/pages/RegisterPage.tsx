import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {
  const { name, email, password1, password2, onChange, onSubmit, resetForm } = useForm({
    name: 'nazareno',
    email: 'nazareno',
    password1: '123456',
    password2: '123456',
  });

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
        <button onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  )
}