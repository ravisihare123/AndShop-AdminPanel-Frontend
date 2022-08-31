import React, { useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from "./components/Context/auth";


//App
const App = React.lazy(() => import("./components/app"));

//Dashboard
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));

//Masters
const Category = React.lazy(()=>import ('./components/Pages/Master/Category/Index'))

//custom pages
 const Custompages = React.lazy(()=>import("./components/custompages"))

const Login = React.lazy(() => import("./components/CustomPages/Login/Login"));
 
export default function Main() {
  const { token } = useAuth();
  return (
    <Routes>
      {token ? (
        <>
          <Route path={`/`} element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path={`/category`} element={<Category />} />
          </Route>
        </>
      ) : (
        <>
          <Route path={`/`} element={<Custompages />}>
          <Route path={`/login`} element={<Login />} />
          {/* <Route path="*" element={<Navigate to={"/"} replace />} /> */}
          </Route>
        </>
      )}
    </Routes>
  );
}
