import React from "react";
import Slide from "../../component/Slide";
import TopProduct from "../../component/Home/TopProduct";
import Header from "../../component/Header";
import News from "../../component/Home/News";
export default function Home() {
  return (
    <div className="Body">
    <Slide />
    <TopProduct />
    <News />
    </div>
  );
}
