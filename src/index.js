import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//App
const App = React.lazy(() => import("./components/app"));

//Dashboard
const Dashboard = React.lazy(()=> import("./components/Dashboard/Dashboard"));


//custom Pages
const Login = React.lazy(()=>import("./components/CustomPages/Login/Login"));
const Register = React.lazy(()=>import("./components/CustomPages/Register/Register"));
const ForgotPassword = React.lazy(()=>import("./components/CustomPages/ForgotPassword/ForgotPassword"));
const LockScreen = React.lazy(()=>import("./components/CustomPages/LockScreen/LockScreen"));


const Loaderimg = () => {
  return (
    <div id="global-loader">
      <img
        src={require("./assets/images/loader.svg").default}
        className="loader-img"
        alt="Loader"
      />
    </div>
  );
};
const Root = () => {
  return (
    <Fragment>
      <BrowserRouter>
      <React.Suspense fallback={Loaderimg()}>
        <Routes>
          <Route
            path={`/`}
            element={<App />}
          >
            <Route index element={<Dashboard />} />
            <Route
              path={`/dashboard`}
              element={<Dashboard />}
            /> 
            </Route>
            
            <Route
              path={`/custompages/login`}
              element={<Login />}
            />
            <Route
              path={`/custompages/register`}
              element={<Register />}
            />
            <Route
              path={`/custompages/forgotPassword`}
              element={<ForgotPassword />}
            />
            <Route
              path={`/custompages/lockScreen`}
              element={<LockScreen />}
            />
          
         
        </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
