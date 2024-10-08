import React from 'react'
import  { useState ,useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import Cart from '../../component/Cart/Cart';
import ViewProduct from './Products';
import Home from './Home';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import AuthoMain from '../Authentication/AuthenMain';
import Account from '../../component/Account/Account';
import Product from '../../component/Product/Product';
import Payment from '../../component/Product/Payment';
import FormForgotPassword from '../Authentication/Form/ForgotPassword';
import FormRegister from '../Authentication/Form/Register';
import News from './News';
import AboutUs from './AboutUs';

import NewDetail from './NewDetail';
import NewestFeed from '../../component/FeedNewest';
function User(props) {
  const [isLogin, setIslogin] = useState('No');
  const handleLogin = (loginStatus) => {
    setIslogin(loginStatus);
    props.setWhoLogin(loginStatus);
  };

  useEffect(()=>{
    if(localStorage.getItem("userId") != null){
      // console.log(localStorage.getItem("userId"));
      setIslogin(localStorage.getItem("userId"));
      // console.log(isLogin);
    }
  },[])
  // console.log(isLogin);

  let loginComponent = isLogin === 'No' ? <AuthoMain onLogin={handleLogin} /> : <Account isLogin={isLogin} />;
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ViewProduct />} />
          <Route exact path="/products/product/:id" element={<Product isLogin={isLogin}/>} />
          <Route exact path="/products/payment" element={<Payment/>} />
        <Route exact path="/news" element={<News />} />
          <Route exact path='/newdetail/:newId' element={<NewDetail />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/cart" element={<Cart userID = {isLogin} />} />

        <Route exact path="/login" element={loginComponent} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/forgotpassword" element={<FormForgotPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default User