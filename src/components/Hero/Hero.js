import React from 'react';
import '../Styles.css';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 col-sm-12'>
            <div className="form-data">
              <div className="form-head">
                <h2>Book a driEV</h2>
              </div>

              <div className='form-body'>
                <div className="row-form-row">
                  <h5>Search Your City</h5>
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">Bhubaneswar</option>
                    <option value="2">Cuttack</option>
                  </Form.Select>
                </div> <br />

                <div className="row-form-row">
                  <h5>Rental Type</h5>
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">Daily</option>
                    <option value="2">Weekly</option>
                    <option value="3">Subscription</option>
                  </Form.Select>
                </div> <br />

                <div className="row-form-row">
                  <h5>Enter Duration</h5>
                  <input type="text" className='form-control' placeholder='days/weeks' />
                </div> <br />

                <Row className="g-2">
                  <Col md>
                    <h5>Pickup Date</h5>
                    <FloatingLabel>
                      <Form.Control type="date" />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <h5>Pickup Time</h5>
                    <FloatingLabel controlId="floatingSelectGrid">
                      <Form.Control type="time" defaultValue={'09:00'} />
                    </FloatingLabel>
                  </Col>
                </Row>
                <br />

                <div className='btn-proceed d-flex justify-content-center'>
                  <button style={{fontFamily: 'Poppins'}}>Proceed</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-7 col-sm-12'>
            <div className="content">
              <h2><a href=""><span>Monthly E</span>V subscriptions</a></h2>
              <br />
              <ul>
                <li>For 1, 3, 6 months or 1, 2, 3 years</li> <br />
                <li>Extend or return anytime</li> <br />
                <li>Doorstep Delivery and Pickup</li> <br />
              </ul>

              <div className='btn-right'>
                <button style={{fontFamily: 'Poppins'}}>View All EV's &nbsp; →</button>
              </div> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;