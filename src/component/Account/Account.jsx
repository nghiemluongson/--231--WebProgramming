import React, { useState, useEffect } from "react";
import "./Account.css";
import axios from 'axios';

function handleOut(event){
   localStorage.removeItem('userId');
   // console.log(localStorage.getItem('userId'));
   window.location.reload();
}
const Account = (props) =>{

   function handleSubmit() {

    }
   console.log(props.isLogin);
    const [account, setAccount] = useState({});

        useEffect(() => {
        axios
          .get("http://localhost/CarShop_Project/BE/Model/Account-data.php")
          .then((response) => {
            const filteredID = response.data.filter(account => account.id == props.isLogin);
            if (filteredID.length > 0) {
               setAccount(filteredID[0]);
            }
          })
          .catch((error) => console.log(error));
      }, [props.isLogin]);
    return(
        <>
        <div className="main">
        <div className="account">
        <div className="row">
            <div className="form col-md-7">
                <div className="info">
                   <label htmlFor="name" className="form-lable">Tên đăng nhập</label>
                   <input type="text" className="form-control" name="name" value={account.name} />
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Mật khẩu</label>
                   <input type="text" className="form-control" name="password" value={account.password}/>
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Email</label>
                   <input type="text" className="form-control" name="email" value={account.email}/>
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Số điện thoại</label>
                   <input type="text" className="form-control" name="phone" value={account.phone_number}/>
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Địa chỉ</label>
                   <input type="text" className="form-control" name="location" value={account.address}/>
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Ngày sinh</label>
                   <input type="date" className="form-control" name="date" id="date" value={account.birthday} />
                </div>
                <div className="info">
                  <button className="btn btn-primary" onClick={handleSubmit}>Lưu</button>
                  <button type="button" class="btn btn-danger" onClick={handleOut}>Đăng xuất</button>
                </div>
            </div>
            <div className="col-md-5">
            <div className="avatar">
            <img src="https://i.pinimg.com/564x/0d/43/d7/0d43d7f06ecf44b7259548edb5f35da6.jpg" className="anh"/>
            <input type="file" name="file" id="file"/>
            </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Account;