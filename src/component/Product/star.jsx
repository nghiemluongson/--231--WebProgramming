import { useState } from "react";
import {FaStar} from "react-icons/fa"


function StarRating(props) {
    const [rating, setRating] = useState(props.rating);
    const stars = Array(5).fill(0)
    return (
        <div>
            {
                stars.map((star, idx) => {
                    return(                    
                        <FaStar
                            key={idx}
                            size={20}
                            name="rating"
                            type="radio"
                            values={rating}
                            color={rating > idx? "#FFBA5A":"#a9a9a9" }
                        />
                    )
                })
            }
        </div>
  );
}

export default StarRating;