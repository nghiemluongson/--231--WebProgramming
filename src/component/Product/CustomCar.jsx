import { Col, Row, Container, Button, ToggleButton, Form ,InputGroup, Carousel} from "react-bootstrap";
import { Link} from "react-router-dom";
import Style1 from './style1.JPG';
import Style2 from './style2.JPG';
import { useState } from "react";
import "./CustomCar.css"
import axios from 'axios';
import {useNavigate} from "react-router-dom";


function addToCart(id, customer_id, car_id, color, wheel, name, price, img) {
    const data = { // Tạo một object chứa thông tin của đơn hàng
        code: id,
        userid: customer_id,
        carid: car_id,
        mau: color,
        kieu: wheel,
        ten: name,
        gia: price,
        anh: img,
      };
  axios.post("http://localhost/CarShop_Project/BE/Model/UpCart-data.php", data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
}

const radios = [
    { name: 'black', value: '0' },
    { name: 'red', value: '1' },
    { name: 'blue', value: '2' },
    { name: 'yellow', value: '3' }
];

const wheel_array = [
    {name: 'style1', value: '0'},
    {name: 'style2', value: '1'}
];


function CustomCar(props){
    const[color, setColor] = useState("black");
    const [radioColorValue, setRadioColorValue] = useState('0');
    const [wheel, setWheel] = useState("style1");
    const [radioWheelValue, setRadioWheelValue] = useState('0');
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const handleAddToCart = () => {
        console.log(props.customer_id == "No");
        if(props.customer_id == "No"){
            console.log("here");
            
            navigate("/login");
        }else{
            alert(id);
            addToCart( id, props.customer_id, props.car_id, color, wheel, props.name, props.price, props.carImg[color][wheel][0].url);
            navigate("/cart");
        }
    };

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    
    const handleChangeColor = (e) => {
        setRadioColorValue(e.currentTarget.value);
        if(e.currentTarget.value ==="0") setColor('black');
        else if(e.currentTarget.value ==="1") setColor('red');
        else if(e.currentTarget.value === "2") setColor('blue');
        else setColor('yellow');
    
    }

    const handleChangeWheel = (e) => {
        setRadioWheelValue(e.currentTarget.value);
        if(e.currentTarget.value === "0" ) setWheel('style1');
        else setWheel('style2');
    }
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        if(quantity > 1 )
            setQuantity(quantity - 1);
        else setQuantity(1);
    }
    const handleChangeQuantity = (e) => {
        e.preventDefault();
        if(isNaN(e.currentTarget.value) ||  e.currentTarget.value < 1){
            setQuantity(1);
        }
        else setQuantity(+e.currentTarget.value);
    }


    return (
        <Container fluid>
            <h1>{props.name}</h1>
          <Row>
            <Col lg="8">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {
                        props.carImg[color][wheel].map((car,idx) => (
                        <Carousel.Item key={`img car-${idx}`}>
                            <img
                            className="d-block w-100"
                            src={car.url}
                            alt={car.name}
                            />
                        </Carousel.Item>
                        ))
                    }     
                </Carousel>
            </Col>
            <Col lg="4" id='custom_car'>
                <Form action="">
                    <p>Chọn Màu Xe</p>
                    {
                        radios.map((radio, idx) => (
                            <ToggleButton className="col-lg-2 m-2 colorButton"
                                key={`radio-${idx}`}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx === 0 ? 'dark' : ( idx === 1 ?'danger':(idx === 2 ?'primary':'warning'))}
                                name="color"
                                value={radio.value}
                                checked={radioColorValue === radio.value}
                                onChange={handleChangeColor}
                            >
                                {radio.name}
                            </ToggleButton>
                            )
                        )
                    }

                    <p>Chọn Bánh Xe</p>    
                    <div className="row-xl button-wheel">
                    {
                        wheel_array.map((wheelObject,idx) =>(
                                <ToggleButton className="col-lg-2 img-button p-2 m-2"
                                    key={`wheel-${idx}`}
                                    variant="inline"
                                    id={`wheel-${idx}`}
                                    type="radio"
                                    name="wheel_style"
                                    value={wheelObject.value}
                                    checked={radioWheelValue === wheelObject.value}
                                    onChange={handleChangeWheel}
                                >
                                    <img className="wheel-img" src={idx === 0 ? Style1 : Style2} alt="" />
                                </ToggleButton>  
                        ))
                    }

                        <p>Số lượng</p>
                        <InputGroup className="text-center">
                            <Button id="increase" onClick={decreaseQuantity}>-</Button>
                            <input
                                id="quantity"
                                type="text"  
                                name="quantity" 
                                value={quantity}
                                onChange={handleChangeQuantity} 
                                style={{width:"10%"}}
                            />
                            <Button id="decrease" onClick={increaseQuantity}>+</Button>
                        </InputGroup>
                    </div>

                    <div className="text-center" id="price"  >
                        <p>Price : {(parseInt(quantity*props.price)).toLocaleString()}vnd</p>
                        {/* <Link to="/Payment" >
                            <Button style={{width:60,height:60}} type="submit" className="col-md-2 m-2" variant="primary"> 
                            Mua ngay
                            </Button>
                        </Link>  */}

                        <Button style={{width:100,height:60}} type="submit" className="col-md-2 m-2" variant="primary"  onClick={handleAddToCart}>
                            Thêm vào giỏ
                        </Button>
                    </div>
                </Form>
            </Col>
          </Row>
        </Container>
    );
}
export default CustomCar;