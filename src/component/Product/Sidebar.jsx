import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import "./Sidebar.css";
function Sidebar(props) {
  const [brands, setBrands] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost/CarShop_Project/BE/Model/Brand-data.php")
      .then((response) => setBrands(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  const handleBrandClick = (brand) => {
    props.onBrandClick(brand);
  }
  
  const groupedBrands = [];
  let currentLetter = null;
  
  brands
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((brand) => {
      const firstLetter = brand.name.charAt(0).toUpperCase();
      if (firstLetter !== currentLetter) {
        currentLetter = firstLetter;
        groupedBrands.push(
          <React.Fragment key={firstLetter}>
            <h3>{firstLetter}</h3>
            <div className="cardtitle">
              <Brand
                imgSrc={brand.logo}
                nameBrand={brand.name}
                onClick={() => handleBrandClick(brand.name)}
              />
            </div>
          </React.Fragment>
        );
      } else {
        groupedBrands.push(
          <div className="cardtitle" key={brand.brand_id}>
            <Brand
              imgSrc={brand.logo}
              nameBrand={brand.name}
              onClick={() => handleBrandClick(brand.name)}
            />
          </div>
        );
      }
    });
  
  return <div className="sidebar">{groupedBrands}</div>;
}

function Brand(props){
  return(
    <div className="brand" style={{display:"flex"}} onClick={props.onClick}>
      <img src={props.imgSrc} alt="brand" />
      <p>{props.nameBrand}</p>
    </div>
  );
}

export default Sidebar;
