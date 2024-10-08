import { useState } from "react";
import { Col, Container, Row , Form, ToggleButton, Button} from "react-bootstrap";
import masterCard from "./mastercard.png"
import visa from "./visa.jpg"
import "./payment.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
const monthList = ["01","02","03","04","05","06","07","08","09","10","11","12"];
const yearList = Array(50);

for(let i = 0 ; i < 50;i++){
    yearList[i] = 2023 + i;
}

export default function(){
    const[shippingMethod,setShippingMethod] = useState('0');
    const[paymentMethod,setPaymentMethod] = useState('0');

    const navigate = useNavigate();
    const shippingMethods = [
        {method:"Hỏa tốc", value:'0',price: "100"},
        {method:"Nhanh", value:'1', price:"50"}, 
        {method:"Tiết kiệm", value:'2',price: "0"}
    ]
    const paymentMethods = [
        {method:"visa",value:"0"},
        {method:"paypel",value:"1"}
    ]

    const handleChangeShipment = e => {
        setShippingMethod(e.currentTarget.value);
    }
    const handleChangePayment = e => {
        setPaymentMethod(e.currentTarget.value);
    }
    const handleSumit = () =>{
        navigate("/");
    }

    return(
    <Container fluid>
        <Form onSubmit={handleSumit}>
            <Row>
                <Col md={6} className="address p-3" >
                        <h2>Địa chỉ giao hàng</h2>
                        <Row>
                            <Col md={8}>
                                <Form.Label>Họ</Form.Label>
                                <Form.Control type="text" placeholder="Nguyễn Văn"  name="fname" id="first_name" required/>
                            </Col>

                            <Col md={4}>
                                <Form.Label>Tên</Form.Label>
                                <Form.Control type="text" placeholder="A"  name="lname" id="last_name" required/>
                            </Col>

                        </Row>

                        
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@gmail.com" required/>
                        

                            <Form.Label>SĐT</Form.Label>
                            <Form.Control type="text" placeholder="09xx xx xx86" maxLength={10} required/>

                                <Form.Label> tỉnh/thành phố</Form.Label>
                                <Form.Select aria-label="Default select example " name="City" id="city">
                                    <option>Tỉnh</option>
                                    <option value="1">Hồ Chí Minh</option>
                                    <option value="2">Hà Nội</option>
                                    <option value="3">Huế</option>
                                </Form.Select>

                            <Form.Label>Địa chỉ giao hàng</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Label>Zip/ portal Code</Form.Label>
                            <Form.Control type="text" placeholder="" />


                </Col>
                <Col md={6} className="shipment-payment p-3">
                    <Row className="shipment-method">
                        <h2>Phương thức giao hàng</h2>
                        {
                            shippingMethods.map((Smethod,idx)=>
                                <Form.Check
                                    key={`method-${idx}`}
                                    className="mx-3"
                                    inline
                                    id={`method-${idx}`}
                                    type="radio"
                                    name="shipment_method"
                                    label={Smethod.method +": " + Smethod.price+"$"}
                                    checked = {shippingMethod === Smethod.value}
                                    value={Smethod.value}
                                    onChange = {handleChangeShipment}
                                />
                            )
                        }

                    </Row> 
                    <Row className="payment-method">
                        <h2>Phương thức thanh toán</h2>
                        <Row>
                        {
                            paymentMethods.map((Pmethod,idx) => 
                                <Col md={4} key={`payment-${idx}`}>
                                    <ToggleButton className="img-button"
                                        variant="inline"
                                        id={`payment-${idx}`}
                                        type="radio"
                                        name="payment_method"
                                        value={Pmethod.value}
                                        checked={paymentMethod === Pmethod.value}
                                        onChange={handleChangePayment}
                                    >
                                        <img
                                            className="img-card"
                                            width={"80px"} 
                                            height={"80px"} 
                                            id={`img-symbol-{idx}`} 
                                            alt="" 
                                            src={Pmethod.method === "visa"? visa: masterCard} 
                                        />
                                    </ToggleButton>  
                                </Col>          
                            )
                        }
                        </Row>

                        <Row id="cardInfo">
                            <Form.Label>Number Card</Form.Label>
                            <Form.Control type="text" name="numberCard" ></Form.Control>

                            <div>Expire Date</div>
 
                            <Row className="p-0">
                                <Col md = {3}>
                                    <Form.Select >
                                    <option value="n/a" >Chọn tháng</option>
                                        {monthList.map((current,idx)=>
                                            (
                                                <option key={`month-${idx}`} value={current}>
                                                    {current}
                                                </option>
                                            )
                                        )}
                                    </Form.Select>
                                </Col>
                                <Col md = {3}>

                                    <Form.Select >
                                        <option value="n/a" > Chọn năm</option>
                                            {yearList.map((current,idx)=>
                                                (
                                                    <option key={`year-${idx}`}value={current}>
                                                        {current}
                                                    </option>
                                                )
                                            )}
                                    </Form.Select>
                                </Col>

                            </Row>
                            <Form.Label>Card Code(CVC)</Form.Label>
                            <Form.Control type="text" name="cardCode"></Form.Control>
                        </Row>
                    </Row>
                            <Button variant="primary" type="submit" id="buttonSubmit" > Confirm </Button>
                </Col>
            </Row>
            
        </Form>
    </Container>
    );
}
