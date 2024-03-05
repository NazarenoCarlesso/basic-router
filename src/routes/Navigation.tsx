import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from '../logo.svg'
import routes from "./routes";
import { Suspense } from "react";

const Navigation = () => {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <div className="main-layout">
            <nav style={{ overflowY: 'auto' }}>
              <img src={logo} alt='logo' style={{ width: 140, marginTop: '20px' }} />
              <ul>
                {
                  routes.map(({ to, name }) => (
                    <li key={to}>
                      <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>
                        {name}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </nav>
            <Routes>
              {
                routes.map(({ to, path, Component }) => (
                  <Route key={to} path={path} element={<Component />} />
                ))
              }
              {/* Default Route */}
              <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default Navigation