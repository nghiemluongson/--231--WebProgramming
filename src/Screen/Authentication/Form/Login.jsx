import React, { useState, useEffect }  from "react";
import "./Login.css";
import { FiMail } from "react-icons/fi";
import { FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const FormLogin = (props) => {
  const [account, setAccount] = useState([]);
  const [Warning, setWarning] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
      axios.get('http://localhost/CarShop_Project/BE/Model/Account-data.php')
        .then(response => setAccount(response.data))
        .catch(error => console.log(error));
    }, []);
    const handleSignIn = (e) => {
      e.preventDefault();
      const email = document.getElementsByName("user_email")[0].value;
      const password = document.getElementsByName("user_password")[0].value;
      verifyAccount(email, password);
    };
    const verifyAccount = (email, password) => {
      if(email=== "" || password === ""){
        setWarning("Hãy nhập đầy đủ thông tin đăng nhập!");
      } else {
        for (let i = 0; i < account.length; i++) {
          if (email === account[i].email && password === account[i].password) {
            // Trùng khớp, chuyển hướng đến trang khác
            console.log(account[i].id);
            localStorage.setItem("userId",account[i].id);
            
            if(account[i].role == 'customer'){
              props.onLogin(account[i].id);
            } else if(account[i].role == 'admin'){
              // Tạo điều hướng tới Page dành cho admin
              props.onLogin('admin');
              navigate('/admin');
            } else {
              //NOTHING
            }
            
            setWarning("");
            navigate(-1);

            return;
          }
        }
         // Không tìm thấy tài khoản
         setWarning("Thông tin tài khoản của bạn không chính xác!");
         props.onLogin("No");
      }
     
    };
  return (
    <div id="formLogin">
      <form>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FiMail class="item" />
          </div>
          <div class="col-10">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="user_email"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FaKey class="item" />
          </div>
          <div class="col-10">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="password"
              placeholder="Enter password"
              name="user_password"
            ></input>
          </div>
        </div>
        <div class="a alert alert-danger border-0 bg-white" role="alert" style={{color: 'red'}}>
        <div>
          {Warning}
        </div>
        </div>
        <button type="submit" class="btn btn-primary" id="signIn" onClick={handleSignIn}>
          Sign in
        </button>
        <p class="text-center" id="for">
          <Link to="/forgotpassword"> Quên mật khẩu?</Link>
        </p>
      </form>
      <button type="submit" className="btn btn-success" id="register" >
        <Link to="/register" style={{color: "white", textDecoration: "none"}}>Register an account</Link>
      </button>
    </div>
  );
};

export default FormLogin;
