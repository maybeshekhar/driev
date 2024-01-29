import React from 'react';
import '../Styles.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import workone from '../../assets/images/works1.png';
import worktwo from '../../assets/images/works2.png';
import workthree from '../../assets/images/works3.png';

const How = () => {
  return (
    <div className='container'>
      <div className='text_how'>
        <h2>How it works</h2>
        <p>Using EV for the first time?... We are here to clear you out with all your doubts.</p>
      </div>

      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card style={{ backgroundColor: 'whitesmoke', border: 'none' }}>
            <img src={workone} alt="" />
          </Card>
        </Col>

        <Col>
          <Card style={{ backgroundColor: 'whitesmoke', border: 'none' }}>
            <img src={worktwo} alt="" />
          </Card>
        </Col>

        <Col>
          <Card style={{ backgroundColor: 'whitesmoke', border: 'none' }}>
            <img src={workthree} alt="" />
          </Card>
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default How;