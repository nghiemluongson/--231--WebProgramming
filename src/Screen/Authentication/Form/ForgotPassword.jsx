import React, { useState, useEffect }  from "react";
import axios from 'axios';
import "./Login.css";
import { FiMail } from "react-icons/fi";
import { BsQuestionLg, BsFillChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FormForgotPassword = () => {
  const [account, setAccount] = useState([]);
  const [password, setPassword] = useState([]);
  const [Warning, setWarning] = useState([]);
  useEffect(() => {
      axios.get('http://localhost/CarShop_Project/BE/Model/Account-data.php')
        .then(response => setAccount(response.data))
        .catch(error => console.log(error));
    }, []);
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = document.getElementsByName("user_email")[0].value;
    const question = document.getElementsByName("user_question")[0].value;
    const answer = document.getElementsByName("user_answer")[0].value;
    verifyAccount(email, question, answer);
  };
  const verifyAccount = (email, question, answer) => {
    if(email === "" || question === "0" || answer === ""){
      setWarning("Hãy nhập đầy đủ thông tin!");
    } else {
      
      for (let i = 0; i < account.length; i++) {
        var dbquestion = 0;
        if(account[i].security_question === "Sở thích của bạn là gì"){
          dbquestion = "1";
        } else if(account[i].security_question === "Bạn sống ở đâu"){
          dbquestion = "2";
        } else if(account[i].security_question === "Biệt danh của bạn là gì"){
          dbquestion = "3";
        } else if(account[i].security_question === "Bạn đang làm nghề gì"){
          dbquestion = "4";
        } else {
          //NOTHING
        }
        if (email === account[i].email && question === dbquestion && account[i].security_answer === answer) {
          // Trùng khớp, chuyển hướng đến trang khác
          setWarning("");
          let notification = "Mật khẩu của bạn là: " + account[i].password;
          navigation(notification);
          
          return;
        } 
      }
     
    }
    setWarning("Thông tin bạn nhập không chính xác!");
  }
  const navigation = (notification) => {   
    alert(notification);
    window.location.href = "/signin";
  }
  return (
    <div className="register">
      <div className="title-register">
        <div class="d-flex justify-content-center">
          <h1>Forgot password</h1>
        </div>
      </div>
      <div>
        <div id="formForgotRegister">
          <form>
            <div class="a form-group shadow-sm d-flex align-items-center">
              <div class="col-2 ">
                <FiMail class="item" />
              </div>
              <div class="col-10">
                <label for="email">EMAIL ADDRESS</label>
                <input
                  type="email"
                  class="form-control border-0 shadow-none bg-white form-control-sm"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  name="user_email"
                ></input>
              </div>
            </div>
            <div class="a form-group shadow-sm d-flex align-items-center">
              <div class="col-2 ">
                <BsQuestionLg class="item" />
              </div>
              <div class="col-10">
                <div class="input-group">
                  <label for="question">QUESTION</label>
                  <select
                    class="custom-select border-0"
                    id="question"
                    name="user_question"
                  >
                    <option value="0" selected>Select Question</option>
                    <option value="1">Sở thích của bạn là gì</option>
                    <option value="2">Bạn sống ở đâu</option>
                    <option value="3">Biệt danh của bạn là gì</option>
                    <option value="4">Bạn đang làm nghề gì</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="a form-group shadow-sm d-flex align-items-center">
              <div class="col-2 ">
                <BsFillChatDotsFill class="item" />
              </div>
              <div class="col-10">
                <label for="answer">ANSWER</label>
                <input
                  type="text"
                  class="form-control border-0 shadow-none bg-white form-control-sm"
                  id="answer"
                  placeholder="Enter your answer"
                  name="user_answer"
                ></input>
              </div>
            </div>
            <div class="a alert alert-danger border-0 bg-white" role="alert" style={{color: "red"}}>
              {Warning}
            </div>
          </form>
          <button type="submit" class="btn btn-success" id="register" onClick={handleForgotPassword}>
            Confirm
          </button>
          <p class="text-center">
            <Link to="/signin">Back to login page</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormForgotPassword;
