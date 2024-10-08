import React, { useState, useEffect } from 'react';
import './FullScreenBackground.css';

function FullScreenBackground(props) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="full-screen-background" style={{ height: windowHeight }}>
      {props.children}
    </div>
  );
}

export default FullScreenBackground;