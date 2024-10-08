import React, { useState, useEffect }  from "react";
import "./Login.css";
import { FiMail } from "react-icons/fi";
import axios from 'axios';
import {
  BsFillCalendarEventFill,
  BsTelephoneFill,
  BsQuestionLg,
  BsFillChatDotsFill,
} from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaKey, FaSignature, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
const FormRegister = () => {
  const [account, setAccount] = useState([]);
  const [Warning, setWarning] = useState([]);
  useEffect(() => {
      axios.get('http://localhost/CarShop_Project/BE/Model/Account-data.php')
        .then(response => setAccount(response.data))
        .catch(error => console.log(error));
    }, []);
    const handleRegister = (e) => {
      e.preventDefault();
      const name = document.getElementsByName("user_name")[0].value;
      const email = document.getElementsByName("user_email")[0].value;
      const password = document.getElementsByName("user_password")[0].value;
      const confirmPassword = document.getElementsByName("user_repassword")[0].value;
      const birth = document.getElementsByName("user_birthday")[0].value;
      const address = document.getElementsByName("user_address")[0].value;
      const phone = document.getElementsByName("user_phonenumber")[0].value;
      const question = document.getElementsByName("user_question")[0].value;
      const answer = document.getElementsByName("user_answer")[0].value;

      
      verifyAccount(name, email, password, confirmPassword, birth, address, phone, question, answer);
    };

    const verifyAccount = (name,email, password, confirmPassword, birth, address, phone, question, answer) => {
      var yearAge = parseInt(
        birth.substring(0, 4),
        10)
      let regexName = new RegExp(/^[a-z|A-Z|ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{1,128}$/);
      let regexEmail = new RegExp(/\b\w+@gmail\.com\b/);
      let regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/);
      let regexNumPhone = new RegExp(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/);
      let regexAnswer = new RegExp(/^.{0,100}$/)
      if(name===""||email=== "" || password === ""||confirmPassword===""||birth===""||address===""||phone===""||question==="0"||answer===""){
        setWarning("Hãy nhập đầy đủ thông tin!");
        
      } else if(!regexName.test(name)){
        setWarning("Tên của bạn không được chứa số, ký tự đặc biệt!");
        
      } else if(!regexEmail.test(email)){
        setWarning("Email của bạn cần phải có định dạng <tên>@gmail.com!");
        
      } else if(!regexPassword.test(password)){
        setWarning("Mật khẩu phải có ít nhất 8 ký tự đến 32 ký tự, bao gồm ký tự viết hoa, viết thường, số và ký tự đặc biệt!");
        
      }else if(!(password === confirmPassword)){
        setWarning("Mật khẩu xác nhận phải khớp với mật khẩu!");
        
      }else if((2023-yearAge+1)<15){
        setWarning("Tuổi của bạn cần phải lớn hơn 15");
        
          
      } else if(!regexNumPhone.test(phone)){
        setWarning("Số điện thoại gồm 10 số nếu có nhập số 0 ở đầu tiên còn nếu không nhập 0 thì còn 9 số!");
      } else if(!regexAnswer.test(answer)){
        setWarning("Câu trả lời bảo mật không được quá 100 ký tự!");
      }else {
        setWarning("");
        verifyEmail(name, email, password, confirmPassword, birth, address, phone, question, answer);
      }
     
    };
    const verifyEmail = (name, email, password, confirmPassword, birth, address, phone, question, answer) => {
      let id = 0;
      for (let i = 0; i < account.length; i++) {
        if(account[i].id > id){
          id = account[i].id;
        }
        if (email === account[i].email) {
          // Trùng khớp, chuyển hướng đến trang khác
          setWarning("Email của bạn đã được sử dụng!");
          
          return;
        }
      }
      id += 1;
      uploadDatabase(id,name, email, password, birth, address, phone, question, answer);
      setWarning("");
    }
    const uploadDatabase = (id ,name, email, password, birth, address, phone, question, answer) => {
      if(question == '1'){
        question="Sở thích của bạn là gì";
      } else if(question == '2'){
        question="Bạn sống ở đâu";
      } else if(question == '3'){
        question = "Biệt danh của bạn là gì";
      } else if (question == '4'){
        question = "Bạn đang làm nghề gì"
      } else {
        //
      }
      const data = { // Tạo một object chứa thông tin của tài khoản
        user_id: id,
        user_name: name,
        user_email: email,
        user_password: password,
        user_birthday: birth,
        user_address: address,
        user_phonenumber: phone,
        user_question: question,
        user_answer: answer,
      };
      axios.post('http://localhost/CarShop_Project/BE/Model/registerAccount-data.php', data)
      .then(response => {
        // Xử lý kết quả trả về nếu cần
        alert("Đăng ký thành công, bạn vui lòng đăng nhập lại!");
        navigation();
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        alert(error);
      });
    }
    const navigation = () => {   
      window.location.href = "/signin";
    }
  return (
    <div className="register">
      <div className="title-register">
      <div class="d-flex justify-content-center"><h1>Sign Up</h1></div>
      </div>
     <div>
     <div id="formRegister">
     <form>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FaSignature class="item" />
          </div>
          <div class="col-10">
            <label for="name">FULL NAME</label>
            <input
              type="text"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="name"
              placeholder="Enter your name"
              name="user_name"
            ></input>
          </div>
        </div>
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
            <FaKey class="item" />
          </div>
          <div class="col-10">
            <label for="password">PASSWORD</label>
            <input
              type="password"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="password"
              placeholder="Enter password"
              name="user_password"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FaLock class="item" />
          </div>
          <div class="col-10">
            <label for="con_password">CONFIRM PASSWORD</label>
            <input
              type="password"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="con_password"
              placeholder="Enter confirm password"
              name="user_repassword"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <BsFillCalendarEventFill class="item" />
          </div>
          <div class="col-10">
            <label for="birthday">DATE OF BIRTH</label>
            <input
              type="date"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="birthday"
              placeholder="Enter your birthday"
              name="user_birthday"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <ImLocation2 class="item" />
          </div>
          <div class="col-10">
            <label for="address">ADDRESS</label>
            <input
              type="text"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="address"
              placeholder="Enter your address"
              name="user_address"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <BsTelephoneFill class="item" />
          </div>
          <div class="col-10">
            <label for="phonenumber">PHONE NUMBER</label>
            <input
              type="text"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="phonenumber"
              placeholder="Enter your phone number"
              name="user_phonenumber"
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
        <div class="a alert alert-danger border-0 bg-white" role="alert" style={{color: 'red'}}>
          {Warning}
        </div>
        </form>
        <button type="submit" class="btn btn-success" id="register" onClick={handleRegister}>
        Sign Up
        </button>
        <p class="text-center">
        Already have an account?{" "}
        <Link to="/signin">Sign In</Link>
        </p> 
      </div>
     </div>
    </div>
  );
};

export default FormRegister;
{/* */}