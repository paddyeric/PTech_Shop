import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Cart from "./components/Cart";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import UpdateProduct from "./components/admin/UpdateProduct";
import AddProduct from "./components/admin/AddProduct";
import ListAllProducts from "./components/admin/ListAllProducts";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import Success from "./components/Success";
import Cancel from "./components/Cancel";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="" element={<UserRoutes />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Route>

      <Route path="" element={<AdminRoutes />}>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/admin/listproducts" element={<ListAllProducts />} />
        <Route path="/admin/product/:id/edit" element={<UpdateProduct />} />
      </Route>
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
