import React from "react";
import FormLogin from "./Form/Login";
import FormRegister from "./Form/Register";
import "./AuthenMain.css";

const AuthoMain = (props) => {
  
  return (
      <div class="container-fluid">
      <div class="row login">
        <div class="col-lg-6 d-flex justify-content-center">
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/df/Lamborghini_Logo.svg/672px-Lamborghini_Logo.svg.png"
          ></img>
        </div>
        <div class="col-lg-6 ">
          <FormLogin onLogin={props.onLogin} />
        </div>
      </div>
    </div> 
  );
};

export default AuthoMain;
