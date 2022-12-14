import React, { useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from "./components/Context/auth";
import Info from "./components/Pages/Master/info/Info";


//App
const App = React.lazy(() => import("./components/app"));

//Dashboard
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));

//Masters
const Category = React.lazy(() => import('./components/Pages/Master/Category/Index'))
const Product = React.lazy(() => import("./components/Pages/Master/Product/Index"))
const ProductForm = React.lazy(() =>
  import("./components/Pages/Master/Product/ProductForm")
);
const Banner = React.lazy(() => import("./components/Pages/Master/Banner/Index"))
const BannerForm = React.lazy(() => import("./components/Pages/Master/Banner/BannerForm"))
const Order = React.lazy(() => import("./components/Pages/Master/order/order.js"));

// const Info = React.lazy(() => import("./components/Pages/Master/info/Info.js"));
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
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={`/category`} element={<Category />} />
            <Route path={`/product`} element={<Product />} />
            <Route path={`/product/form`} element={<ProductForm />} />
            <Route path={`/banner`} element={<Banner />} />
            <Route path={`/banner/form`} element={<BannerForm />} />
            <Route path={`/order/list`} element={<Order />} />
          </Route>
            <Route path={`/info`} element={<Info/>} />
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
