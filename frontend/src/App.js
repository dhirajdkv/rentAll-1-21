import Layout from "./component/layout/Layout";
import Home from "./component/Home/Home.js";
// import ProductDetails from "./component/Product/ProductDetails.js";
// import Cart from "./component/Cart/Cart.js";
import React from "react";
// import Products from "./component/Product/Products.js";
// import CategoriesPage from "./component/Product/CategoryPage.js";
import Login from "./component/User/Login.js";
import SignUp from "./component/User/SignUp.js";
// import Dashbord from "./component/admin/Dashbord.js";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./component/User/UserProfile.js";
// import ManageUser from "./component/admin/manageUsers/ManageUsers.js";
// import Manageproduct from "./component/admin/manageProduct/Manageproduct.js";
// import AddProduct from "./component/admin/manageProduct/AddProduct.js";
// import ShippingForm from "./component/Cart/ShippingForm.js";
// import ManageOrders from "./component/admin/manageOrders/ManageOrders.js";
// import ManageSingleUser from "./component/admin/manageUsers/ManageSingleUser.js";
// import ManageSingleOrder from "./component/admin/manageOrders/ManageSingleOrder.js";
// import ManageReviews from "./component/admin/manageReviews/ManageReviews.js";
// import ManageSingleProduct from "./component/admin/manageProduct/ManageSingleProduct.js";
// import EditProduct from "./component/admin/manageProduct/UpdateProduct.js";
import UpdateUserProfile from "./component/User/UpdateUserProfile.js";
// import ShippingInfo from "./component/Cart/ShippingInfo.js";
// import PaymentSucessfull from "./component/Cart/PaymentSucessfull.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgetPassword from "./component/User/ForgetPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
// import Myorders from "./component/User/Myorders.js";
// import SingleOrder from "./component/User/SingleOrder.js";
import AboutMe from "./component/aboutUs/AboutMe.js";
// import ContactUs from "./component/contactUs/ContactUs.js";
import PageNotFound from "./component/layout/PageNotFound.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import ForgetPasswordMessage from "./component/User/ForgetPasswordMessage.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="products/catogries" element={<CategoriesPage />} />
        <Route path="product/:id" element={<ProductDetails />} /> */}
        {/* <Route path="cart">
          <Route index element={<Cart />} />
          <Route
            path="checkout"
            element={<ProtectedRoute Component={ShippingForm} />}
          />
          <Route
            path="shippinginfo"
            element={<ProtectedRoute Component={ShippingInfo} />}
          />
          <Route path="orderplaced" element={<PaymentSucessfull />} />
        </Route> */}
        {/* <Route path="products/:keyword" element={<Products />} />
        <Route path="products" element={<Products />}></Route> */}
        <Route path="user">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="profile"
            element={<ProtectedRoute Component={UserProfile} />}
          />
        </Route>
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
