import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles.css';
import { InputGroup, FormControl , Button } from 'react-bootstrap';
import insta from '../../assets/icons/insta.png';
import twi from '../../assets/icons/x.png';
import linked from '../../assets/icons/link.png';
import snap from '../../assets/icons/snap.png';
import logo from '../../assets/images/logowhite.png'
import arrow from '../../assets/icons/arrow.png'
import mapgreen from '../../assets/icons/mapgreen.png'

const Footer = () => {
  return (
    <>
    <div className="footers bg-black pt-5 pb-3">
      <Container  className="pt-5">
        <Row>
          <Col md={3} className="footer-column">
            <div className="footers-logo mb-3">
              <img src={logo} alt="Logo" style={{ width: '120px' }} />
            </div>
            <div className="subscribe-newsletter">
                <p>Subscribe to our newsletter</p>
                <div className="d-flex justify-content-center">
      <InputGroup className="w-auto">
        <FormControl
          type="text"
          placeholder="Enter your Email"
          aria-describedby="button-addon1"
        />
        <Button className='footer-button' style={{backgroundColor: '#3db54a', border: 'none'}}>
          <img src={arrow} style={{height: '15px', paddingBottom: '3px'}} alt="" />
        </Button>
      </InputGroup>
    </div>
              </div>
              <div className="social-icons mt-3">
                <a href="https://www.instagram.com/"><img className="social-icon" src={insta} alt="Instagram" /></a>
                <a href="https://twitter.com/"><img className="social-icon2" src={twi} alt="Twitter" /></a>
                <a href="https://www.snapchat.com/"><img className="social-icon" src={snap} alt="Linkedin" /></a>
                <a href="https://www.linkedin.com/"><img className="social-icon" src={linked} alt="Snapchat" /></a>
              </div>
          </Col>
          
          <Col md={2} className="footer-column"  style={{textDecoration: 'none'}}>
            <h5 className='nav-header'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{textDecoration: 'none'}}>Rent a Vehicle</a></li>
              <li><a href="#" style={{textDecoration: 'none'}}>Pricing</a></li>
              <li><a href="#" style={{textDecoration: 'none'}}>Things you should know</a></li>
              <li><a href="#" style={{textDecoration: 'none'}}>Privacy Policy</a></li>
              <li><a href="#" style={{textDecoration: 'none'}}>Cancellation Policy</a></li>
              <li><a href="#" style={{textDecoration: 'none'}}>Terms and Conditions</a></li>
            </ul>
          </Col>

          <Col md={2} className="footer-column">
            <h5 className='nav-header'>About</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{textDecoration: 'none'}}>Our Story</a></li>
              <li><a href="#" style={{textDecoration: 'none'}}>Careers</a></li>
            </ul>
          </Col>


          <Col md={2} className="footer-column">
            <h5 className='nav-header'>Help</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{textDecoration: 'none'}}>FAQs</a></li>
              <li><a href="#" style={{textDecoration: 'none'}}>Contact Us</a></li>
              <li><a href="#" style={{textDecoration: 'none'}}>Documents for KYC</a></li>
            </ul>
          </Col>

          <Col md={3} className="footer-column">
            <h5 className='nav-header'>Customer Support</h5>
            <p className="mb-1">+91 9439099990</p>
            <br />
            <h5 className='nav-header'>Locate us</h5>
            <button className="btn btn-outline-primary btn-sm" style={{backgroundColor: 'gainsboro', color: 'darkgreen', border: 'none'}}>View Us on Map <img src={mapgreen} style={{height: '20px', paddingBottom: '2px'}} alt="" /></button>
            <p className="mt-2">257, 2nd Floor Devika Niwas,<br/> Jaydev Vihar, Bhubaneswar,<br/> Odisha 751013</p>
          </Col>
        </Row>
      </Container>
    </div>
  </>
  );
};

export default Footer;