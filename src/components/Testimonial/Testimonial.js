import React from 'react';
import '../Styles.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import datas from './Datas';

const Testimonial = () => {

const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className={i <= rating ? 'star filled' : 'star'}>&#9733;</span>);
    }
    return stars;
  };

   return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
    <div className='container' >
        <div className='text_how'>
        <h2>Customer's feedback</h2>
        <p>Our customer s review..</p>
      </div>

     <Container className="py-3">
      <Row className="justify-content-center">
        {datas.map((data) => (
          <Col key={data.id} md={4} className="mb-4">
            <Card className="text-center"  style={{ height: '100%' }}>
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <Image src={data.image} rounded style={{ width: '80px', height: '80px' }} />
                  <div className="ml-3" style={{textAlign: 'left' , paddingLeft: '15px', fontFamily: 'Poppins'}}>
                    <h5>{data.name}</h5>
                    <p className="text-muted">{`${data.profession}, ${data.city}`}</p>
                  </div>
                </div>
                <div className="rating" style={{ fontSize: '24px', color: '#ffc107', fontFamily: 'Poppins' }}>{renderStars(data.rating)}</div>
                <p  style={{fontFamily: 'Poppins'}}>{data.quote}</p>
                <p></p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
    <div className='test-btn'>
            <button style={{fontFamily: 'Poppins'}}>View All Testimonials</button>
            </div>
    </Container>


    </div>
    </div>
  )
}

export default Testimonial