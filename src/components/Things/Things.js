import React from 'react';
import '../Styles.css';
import solo from '../../assets/images/things.jpg';
import { Card } from 'react-bootstrap'; 
import icon1 from '../../assets/icons/How to charge icon.svg'
import icon2 from '../../assets/icons/Where to charge Icon.svg'
import icon3 from '../../assets/icons/What is the range Icon.svg'
import icon4 from '../../assets/icons/Full Charge Icon.svg'

const Things = () => {
  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <div className='container'>

      <div className='text_how'>
              <h2>Things you should know</h2>
              <p>Using EV for the first time?... We are here to clear you out with all your doubts.</p>
            </div>


        <div className='row'>
        
          <div className='col-md-5'>
            <div className='image'>
              <img src={solo} alt='Things you should know' style={{ width: '90%', height: '84vh', objectFit: 'cover' }} />
            </div> <br />
          </div>

          
          <div className='col-md-6'>
  
  <div className='para'>
    
    <Card style={{ marginBottom: '20px' }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
        
        <img src={icon1} alt="Your Image" style={{ width: '12%', marginRight: '20px' }} />

        
        <div className='things-font'>
          <h4>How to charge?</h4>
          <p>
            Keeping your scooter's battery charged and in good working order is an integral part of maintaining your scooter's overall.
          </p>
        </div>
      </Card.Body>
    </Card>

    <Card style={{ marginBottom: '20px' }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
        
        <img src={icon2} alt="Your Image" style={{ width: '12%', marginRight: '20px' }} />

        
        <div className='things-font'>
          <h4>Where to charge?</h4>
          <p>
            Keeping your scooter's battery charged and in good working order is an integral part of maintaining your scooter's overall.
          </p>
        </div>
      </Card.Body>
    </Card>

    <Card style={{ marginBottom: '20px' }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
        
        <img src={icon3} alt="Your Image" style={{ width: '12%', marginRight: '20px' }} />

        
        <div className='things-font'>
          <h4>What is the range?</h4>
          <p>
            Keeping your scooter's battery charged and in good working order is an integral part of maintaining your scooter's overall.
          </p>
        </div>
      </Card.Body>
    </Card>

    <Card style={{ marginBottom: '20px' }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
       
        <img src={icon4} alt="Your Image" style={{ width: '12%', marginRight: '20px' }} />

        
        <div className='things-font'>
          <h4>How long does it take to full charge?</h4>
          <p>
            Keeping your scooter's battery charged and in good working order is an integral part of maintaining your scooter's overall.
          </p>
        </div>
      </Card.Body>
    </Card>

  </div>

  <div className='para-btn'>
    <button style={{fontFamily: 'Poppins'}}>Learn More</button>
  </div> <br />
</div>
        </div>
      </div>
    </div>
  );
};

export default Things;