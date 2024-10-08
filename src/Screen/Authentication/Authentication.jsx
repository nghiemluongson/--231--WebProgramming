import React from "react";
import AuthoMain from "./AuthenMain";
import Register from "./Form/Register";
import { Routes, Route, useLocation } from "react-router-dom";
import FormForgotPassword from "./Form/ForgotPassword";
import FullScreenBackground from "../../component/Background/FullScreenBackground";

function Authentication(props) {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<AuthoMain />} />
      <Route path="/signin" element={<AuthoMain />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<FormForgotPassword />} />
    </Routes>
  );
}

export default Authentication;
