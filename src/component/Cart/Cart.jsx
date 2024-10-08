
import "./Cart.css";
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
  
function deleteCart(id) {
  const data = {
      code: id,
    };
axios.post("http://localhost/CarShop_Project/BE/Model/Cart-delete.php", data)
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});
}

export default function Cart(props){
  const navigate = useNavigate();
  
  const [productList, setProductList] = useState([]);
  const [productChecked, setProductChecked] = useState([]);





  useEffect(() => {
    axios
      .get("http://localhost/CarShop_Project/BE/Model/Cart-data.php")
      .then((response) => setProductList(response.data))
      .catch((error) => console.log(error));
  }, []);
  const filteredProducts = (props.userID !== '')? productList.filter((product) => product.customer_id == props.userID): productList;
  const handlePayment = () =>{
    if(productChecked.length <= 0){
      alert("hãy chọn sản phẩm muốn thanh toán");
    }
    else{
      navigate("/products/payment");
    }
    
  }




  const handleToggleCheckbox = useCallback((cost, quantity, isChecked,id) => {
    setTotalQuantity(prevQuantity => isChecked ? prevQuantity + 1 : prevQuantity - 1);
    setTotalCost(prevCost => isChecked ? prevCost + cost * quantity : prevCost - cost * quantity);
    setProductChecked(prevProductChecked =>isChecked ?[...prevProductChecked,id] : prevProductChecked.filter((product_id) => product_id != id));
  }, []);
  
  console.log(productChecked);
  
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);


    return(
        <div className="Cart">
        <div className="row Product">
            <div className="Status col-md-4">
            <i class='bx bx-cart' style={{ fontSize: '2.5em' }}>Giỏ hàng</i>
            </div>
            <div className="Status col-md-3">
            <p>Chưa thanh toán:</p>
            <p> đơn</p>
            </div>
            <div className="Status col-md-3">
            <p>Đã thanh toán:</p>
            <p> đơn</p>
            </div>
        </div>

        <div className="row Product">
        <div className="col-md-3">
        <p>Sản phẩm</p>
        </div>
        <div className="col-md-3">
        <p>Đơn giá</p>
        </div>
        <div className="col-md-1">
          <p>Màu sắc</p>
        </div>
        <div className="col-md-1">
          <p>kiểu bánh</p>
        </div>
        <div className="col-md-2">
        <p>Trạng thái</p>
        </div>
        <div className="col-md-2">

        </div>
        </div>
        
        <div>

  {filteredProducts.map((product) => (
    <Product
          id={product.id}
          imgSrc={product.img}
          Name={product.name}
          Cost={product.price}
          color={product.color}
          wheel={product.wheel}
          Status={"Chưa thanh toán"}
          handleToggleCheckbox={handleToggleCheckbox}
    />
  ))}

</div>

        <div>
          <Pay totalQuantity={totalQuantity} totalCost={totalCost} handlePayment={handlePayment}/>
        </div>

        </div>
    )
}

function Product({...props}){
  // console.log(props.id)
  const toggleCheckbox = () => {
    const checkbox = document.getElementById(`myCheckbox${props.id}`);
    const isChecked = checkbox.checked;
    props.handleToggleCheckbox(props.Cost, 1, isChecked,props.id);
  };
  const handleDeleteCart = () => {
    deleteCart(props.id);
    window.location.reload();
  };
    return(
        <div className="row Product">
        <div className="col-md-3">
        <img src={props.imgSrc} class="card-img-top" alt = "car" />
        <div class="card-body text-center">
        <p>{props.Name}</p>
        </div>
        </div>
        <div className="col-md-3">
        <p>{(parseInt(props.Cost)).toLocaleString()} VNĐ</p>
        </div>
        <div className="col-md-1">
          <p>{props.color}</p>
        </div>
        <div className="col-md-1">
          <p>{props.wheel}</p>
        </div>
        <div className="col-md-2">
        <p>{props.Status}</p>
        </div>
        <div className="col-md-1">
        <input
          type="checkbox"
          id={`myCheckbox${props.id}`}
          onChange={toggleCheckbox}
        />
        </div>
        <div className="col-md-1">
        <button className="delete-button" onClick={handleDeleteCart}>
        <i class='bx bx-trash'></i> Xóa
        </button>
        </div>
        </div>
    )
}

function Pay({...props}) {

    
    return (
      <div className="row Product">
        <div className="col-md-3">
          <p>Số đơn: {props.totalQuantity}</p>
        </div>
        <div className="col-md-6">
          <p>Tổng: {(parseInt(props.totalCost)).toLocaleString()} VNĐ</p>
        </div>
        <div className="col-md-3">
          <button className="btn-pay" onClick={props.handlePayment}>Thanh toán</button>
        </div>
      </div>
    );
  }
