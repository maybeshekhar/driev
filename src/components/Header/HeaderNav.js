import React from 'react';
import '../Styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import login from '../../assets/icons/login.png';

const HeaderNav = () => {
  return (
    <div className='header-main'>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-4" style={{ backgroundColor: 'white' }}>
          <Container fluid>
            <Navbar.Brand>
              <img src={logo} className='logo-header' alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Collapse id={`offcanvasNavbar-expand-${expand}`}>
              <Nav className="justify-content-end flex-grow-1 px-3 nav-container">
                <Nav.Link href="#action1" className='nav_link_active'>
                  <h6>Home</h6>
                </Nav.Link>
                <Nav.Link href="#action2" className='nav_link'>
                  <h6>About Us</h6>
                </Nav.Link>
                <Nav.Link href="#action2" className='nav_link'>
                  <h6>Pricing</h6>
                </Nav.Link>
                <Nav.Link href="#action2" className='nav_link'>
                  <h6>Contact Us</h6>
                </Nav.Link>
                <Nav.Link href="#action2" className='nav_link'>
                  <h6>FAQs</h6>
                </Nav.Link>
                <Nav.Link href="#action2" className='nav_link'>
                  <h6>Partner with us</h6>
                </Nav.Link>
                <Nav.Link href="#action2" className='nav_link'>
                  <h6>Login/Signup
                  <img src={login} style={{height: '25px'}} alt="" />
                  </h6>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default HeaderNav;