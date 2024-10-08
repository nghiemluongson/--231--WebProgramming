import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Cart from "../../component/Cart/Cart";
export default function ShowCart() {
  return (
    <div className="Body">
    <Header />
    <Cart />
    <Footer />
    </div>
  );
}