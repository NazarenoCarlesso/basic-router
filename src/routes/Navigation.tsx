import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import {
  RegisterPage, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage,
  RegisterFormikPage, DynamicFormPage
} from "../03-forms/pages";
import logo from '../logo.svg'

const isActive = ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '';

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav style={{ overflowY: 'auto' }}>
            <img src={logo} alt='logo' style={{ width: 140 }} />
            <ul>
              <li>
                <NavLink to='/register' className={isActive}>Register Page</NavLink>
              </li>
              <li>
                <NavLink to='/formik-basic' className={isActive}>Formik Basic</NavLink>
              </li>
              <li>
                <NavLink to='/formik-yup' className={isActive}>Formik Yup</NavLink>
              </li>
              <li>
                <NavLink to='/formik-components' className={isActive}>Formik Components</NavLink>
              </li>
              <li>
                <NavLink to='/formik-abstraction' className={isActive}>Formik Abstraction</NavLink>
              </li>
              <li>
                <NavLink to='/register-formik' className={isActive}>Register Formik</NavLink>
              </li>
              <li>
                <NavLink to='/dynamic-form' className={isActive}>Dynamic Form</NavLink>
              </li>
              <li>
                <NavLink to='/users' className={isActive}>Users</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='register' element={<RegisterPage />} />
            <Route path='register-formik' element={<RegisterFormikPage />} />
            <Route path='formik-basic' element={<FormikBasicPage />} />
            <Route path='formik-yup' element={<FormikYupPage />} />
            <Route path='formik-components' element={<FormikComponents />} />
            <Route path='formik-abstraction' element={<FormikAbstraction />} />
            <Route path='dynamic-form' element={<DynamicFormPage />} />
            <Route path='about' element={<h1>About Page</h1>} />
            <Route path='users' element={<h1>Users Page</h1>} />
            <Route path='home' element={<h1>Home Page</h1>} />
            <Route path='/*' element={<Navigate to='/home' replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Navigation