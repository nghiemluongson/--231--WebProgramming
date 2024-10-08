import React from "react";
import "./Style-footer.css";
export default function Footer(){
    return(
        <div className="Footer">
            <div className="infomation row">
            <a href="#" className="navbar-brand col-sm-3" ><img src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png" alt="" width="100" height="100"/></a>
            <div className="inf col-sm-3">
            <h5>Hỗ Trợ</h5>
            <a href="#" className="nav-link">hcmut@gmail.com</a> 
            <a href="#" className="nav-link">www.hcmut.com</a> 
            <a href="#" className="nav-link">hcmut@outlook.com</a> 
            </div>
            <div className="inf col-sm-3">
            <h5>Kênh thông tin</h5>
            <a href="#" className="nav-link">Facebook</a> 
            <a href="#" className="nav-link">Twitter</a> 
            <a href="#" className="nav-link">Instagram</a>
            </div>
            <div className="inf col-sm-3">
            <h5>Hãng đối tác</h5>
            <a href="#" className="nav-link">Porsche</a> 
            <a href="#" className="nav-link">Tesla</a> 
            <a href="#" className="nav-link">Lamborghini</a>
            </div>
            </div>
            <div className="version">
            <a href="#" className="nav-link"> © All Rights Reserved • Carserra • 2023</a>
            </div>
        </div>
    )
}