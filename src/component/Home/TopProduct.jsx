import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function TopProduct(props){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/CarShop_Project/BE/Model/storage/Products-data.php")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = props.selectedBrand
    ? products.filter((product) => product.brand === props.selectedBrand)
    : products;
    return(
       <div>
            <h2 style={{color: "White", margin:"20px 20px"}}> Top Sản Phẩm</h2>
            <div style={{ margin: '30px 10px' }}>
                <div className="row">
                    {filteredProducts
                    .filter((product) => product.brand === "Porsche" || product.brand === "Audi")
                    .map((product) => (
                        <div className="col-md-4" key={product.car_id}>
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
       </div>
    )
}

function CardProduct(props) {
  return (
    <div class="card"> 
      <img src={props.imgSrc} class="card-img-top" alt={props.imgAlt} />
      <div class="card-body text-center">
        <p className="card-text">{props.name}</p>
      </div>
    </div>
  );
}