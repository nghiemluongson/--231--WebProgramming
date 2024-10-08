import { useState } from "react";
import {FaStar} from "react-icons/fa"
import Comment_Rating from "./Comment_Rating";
import StarRating from "./star";
import "./Review.css";

import Avatar from "./avatar.jpg"
export default function Review(props){
    const[userId,setUserID] = useState("0");
    return(
        
        <div className="m-3 review-block">
            <div>
                <h1 >
                    Review
                </h1>
                <Comment_Rating customer_id = {props.customer_id } car_id={props.car_id}/>
            </div>
            {
                props.comment_list.map((comment,idx) => (
                    <div className="row m-0 p-0 review-container" key={`comment-${idx}`}>
                        <div className="col-md-3  review-avatar" >
                            <img id="avatar-img" src={comment["avatar"]} alt="avatar"/>
                        </div>
                        <div className="col-md-6 px-2 review-commnent">

                            <div className="row" id="name">
                                {comment["name"]}
                            </div>
                            <div >
                                <StarRating rating={comment["rate"]} ></StarRating>
                            </div>
                            <div className="row">
                                {comment["content"]}
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>

            
    );
}