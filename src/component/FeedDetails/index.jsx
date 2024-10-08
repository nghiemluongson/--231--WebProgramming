import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBContainer } from 'mdb-react-ui-kit';
import './style.css';

export default function FeedDetail() {
  const [newsdetail, setNewsdetail] = useState([]);
  const pathSegments = window.location.pathname.split('/');
  const newId = parseInt(pathSegments[pathSegments.length - 1], 10);

  useEffect(() => {
    axios
      .get(`http://localhost/CarShop_Project/BE/Controller/index.php/news/get`)
      .then((response) => setNewsdetail(response.data))
      .catch((error) => console.log(error));
  }, []);

  const renderContentWithLineBreaks = (content) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className='feed-container'>
      {newsdetail.map((item) => (
        item.new_id === newId ? (
          <div className='feed-body-container' key={item.new_id}>
            <h1 className="white-text title-container">
              <strong>{item.title}</strong>
            </h1>
            <div className='img-container'>
              <img
                src={item.image}
                className='img-child-container'
                alt={`Feed ${item.new_id}`}
              />
            </div>
            <p className="white-text">
              {renderContentWithLineBreaks(item.content)}
            </p>
            <h4 className="white-text author-container">{item.author_name}</h4>
          </div>
        ) : null
      ))}
    </div>
  );
}
