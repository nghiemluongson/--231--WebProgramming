import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function SlideCar(props) {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        props.car_img.map((car,idx) => (
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
  );
}

