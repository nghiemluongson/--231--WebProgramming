
import Header from "../Header"
import Footer from "../Footer"
import CustomCar from "./CustomCar";
import Specification from "./Specification";
import Review from "./Review";
import Payment from "./Payment";
import "./Product.css"

import {Routes, Route, useParams, useHistory} from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios"
//import { Col, Row, Container, Button, ButtonGroup, ToggleButton, Form} from "react-bootstrap";

function Product(props) {
  const[comment,setComment] = useState([])
  const [name,setName] = useState("")
  const [price,setPrice] = useState("0");
  const [carImg,setCarImg] = useState({"black":{"style1" :[]}});
  const [specification,setSpecification] = useState([]);
  const {id} = useParams();
  

const fetchProductsImg = async () => {
  try {
    const response = await axios.get(`http://localhost/CarShop_Project/BE/Controller/CarController.php?id=${id}`)
    console.log(response.data);
    setCarImg(response.data["img"]);
    setName(response.data["name"]);
    setComment(response.data["comment_list"]);
    setSpecification(response.data["specification"]); // Lưu danh sách sản phẩm vào state
    setPrice(response.data["specification"][6].value);
  } 
  catch (error) {
    alert( error);
  }
};


  useEffect(() => {
    fetchProductsImg(); // Gọi hàm fetchProducts để thực hiện request API khi component được render
  }, []);

  return (
    <div className="product container-fluid">
        {/* <Header/> */}
        <CustomCar carImg={carImg} price={price} name={name} car_id = {id} customer_id = {props.isLogin}/>
        <Specification specification={specification}/>
        <Review comment_list={comment} customer_id = {props.isLogin} car_id = {id}/>
        {/* <Footer/> */}
    </div>
  );
}

export default Product;