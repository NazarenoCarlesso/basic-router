import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from '../logo.svg'
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
import { FormikComponents } from "../03-forms/pages/FormikComponents";

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
                <NavLink to='/users' className={isActive}>Users</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='register' element={<RegisterPage />} />
            <Route path='formik-basic' element={<FormikBasicPage />} />
            <Route path='formik-yup' element={<FormikYupPage />} />
            <Route path='formik-components' element={<FormikComponents />} />
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