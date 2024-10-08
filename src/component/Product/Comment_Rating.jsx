import { useState } from "react";
import {FaStar} from "react-icons/fa"
import Style1 from "./style1.JPG"
import { Modal,Button, Form, Row } from "react-bootstrap";
import "./Comment_Rating.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};


export default function CommentRating(props) {
    const stars = Array(5).fill(0)
    const navigate= useNavigate();

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [text,setText] = useState("");
    const [show, setShow] = useState(false);



    const send_comment = async (sending_data ) =>{
      try {
        const response = await axios.post("http://localhost/CarShop_Project/BE/Controller/CarController.php", sending_data, {headers:{
          "Content-Type": "application/x-www-form-urlencoded" // Đặt Content-Type cho phù hợp với dữ liệu gửi đi
        }});
        // console.log(response.data);

      } 
      catch (error) {
        alert( error);
      }
    }


    const handleSave = (e) => {
        e.preventDefault();
        setShow(false);
        var sending_data = {
          customer_id: props.customer_id,
          car_id: props.car_id,
          rating: currentValue,
          content: text
        };
        // console.log(sending_data);
        send_comment(sending_data); 
        window.location.reload();

    }



    const handleShow = () =>{ 
      // console.log(props.isLogin)
      if(props.customer_id  === "No"){
        // console.log(navigate); 
        setShow(false);
        navigate('/login')//,{ replace: true })
        
      }
      else{setShow(true);}
    }
    const handleClose = () => setShow(false);

  
    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }

    const handleChangeText = (e) => {
      setText(e.target.value);
    }
  
    return (
      <div className="row m-3">
          <Button variant="primary" onClick={handleShow} id="add_comment" >
            +comment
          </Button>
          <Modal show={show} onHide={handleClose} animation={false} className="model">

              <Modal.Header closeButton>
                <Modal.Title>Your comment</Modal.Title>
              </Modal.Header>


              <Modal.Body>
                <Form className="m-3"  id="form_modal" onSubmit={handleSave}>
                  <div className="row-lg" >

                    <div>Rating:</div>

                    {
                        stars.map((_, index) => {
                            return(
                              <span key={`star-${index}`}>
                                
                                <label for={`star-${index}`}>
                                  <FaStar
                                      key={index}
                                      size={24}
                                      
                                      onClick={() => handleClick(index + 1)}
                                      onMouseOver={() => handleMouseOver(index + 1)}
                                      onMouseLeave={handleMouseLeave}
                                      color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                  />
                                </label>
                                <input type="radio"
                                        className="needHidden"
                                        id={`star-${index}`} 
                                        name="rating"
                                        value={currentValue}
                                        style={{display: "none"}}
                                />
                              </span>
                            )
                        })
                    }

                  </div>

                  <Form.Label htmlFor="comment">Your comment</Form.Label>
                  <Form.Control as="textarea" name="comment" onChange={handleChangeText} value={text}/>  
                  <Button variant="primary" type="submit">
                          Save
                  </Button>  
                  
                </Form> 
              </Modal.Body>
          </Modal> 
      </div>
    );
  };