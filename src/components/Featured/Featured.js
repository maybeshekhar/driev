import React from 'react';
import { Image } from 'react-bootstrap';
import demo from '../../assets/images/demoimg.jpg'; 

const Featured = () => {
  return (
    <div className='container' >
      <div className='text_how'>
        <h2>Featured electric scooter</h2>
        <p>We offer luxurious EVs at an affordable rental price.</p>
      </div>

      <br />

      <div className="image-container">
        <Image className='demo_img' src={demo} fluid />
        <div className="overlay"></div>
      </div>

      <br />
    </div>
  );
};

export default Featured;




