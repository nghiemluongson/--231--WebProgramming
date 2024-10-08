import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Products.css";
import { BiMessageRounded, BiBell, BiCog, BiMenu } from "react-icons/bi";
export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [brandInfo, setBrandInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/CarShop_Project/BE/Controller/index.php/product/cars/get")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
      <div style={{ margin: '30px 10px' }}>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4">
              <Link to={`/products/product/${product['car_id']}`} style={{ textDecoration: 'none', color: 'black' }}>
                <CardProduct
                  imgSrc={product.img}
                  imgAlt="Carpicture"
                  name={product.name}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
            


    </>
  );
}

function CardProduct(props) {
  return (
    <div class="card">
      <div class="card_heart">
        <i style={{ fontSize: '2em' }} class='bx bxs-heart'></i>
      </div>
      <div class="card_cart">
        <i style={{ fontSize: '2em' }} class='bx bx-cart-alt'></i>
      </div>
      <img src={props.imgSrc} class="card-img-top" alt={props.imgAlt} />
      <div class="card-body text-center">
        <p className="card-text">{props.name}</p>
        <p className="card-text">{(parseInt(props.price)).toLocaleString()} VNĐ</p>
      </div>
    </div>
  );
}
  