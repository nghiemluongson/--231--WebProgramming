import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import User from './Screen/User/User';
import Admin from "./Screen/Admin/Admin";
import React, { useState, useEffect } from 'react';
export default function App() {
  // Khởi tạo trạng thái từ localStorage hoặc mặc định là 'No'
  const [whoLogin, setWhoLogin] = useState(localStorage.getItem('whoLogin') || 'No');

  // Lưu trạng thái vào localStorage khi trạng thái thay đổi
  useEffect(() => {
    localStorage.setItem('whoLogin', whoLogin);
  }, [whoLogin]);

  return (
    <div className="Body">
      {
        whoLogin !== "admin" ? (
          whoLogin !== "blockcustomer" ? (
            <User setWhoLogin={setWhoLogin} />
          ) : (
            <p>You are blocked from accessing this page.</p>
          )
        ) : (
          <Admin />
        )
      }
    </div>
  );
}