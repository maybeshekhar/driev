import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import one from '../../assets/images/blog1.png';
import two from '../../assets/images/blog2.png';
import three from '../../assets/images/blog3.png';
import '../Styles.css'

const Blogs = () => {
  return (

    <div className='blog-page'>
    <div className='container'>

    <div className='text_how'>
         <h2>Our blogs</h2>
        <p>Latest blog and articles</p>
    </div>

       <Row xs={1} md={3} className="g-4">
      
        <Col>
          <Card  style={{border: 'none', backgroundColor: 'whitesmoke'}}>
            <img src={one} alt="" />
            <Card.Body>
            <div className='things-font'>
              <h4>The wonderful world of urban mobility.</h4>
              <p><b>January 28, 2024</b></p>
              <p>
              Urban mobility refers to the movement of people and goods within a city or urban area. It encompasses various modes of transportation, infra.. <a href="" style={{textDecoration: 'none' , color: 'green'}}><span>Read more</span></a>
              </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card  style={{border: 'none', backgroundColor: 'whitesmoke'}}>
            <img src={two} alt="" />
            <Card.Body>
            <div className='things-font'>
              <h4>The wonderful world of urban mobility.</h4>
              <p><b>January 28, 2024</b></p>
              <p>
              Urban mobility refers to the movement of people and goods within a city or urban area. It encompasses various modes of transportation, infra.. <a href="" style={{textDecoration: 'none' , color: 'green'}}><span>Read more</span></a>
              </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card  style={{border: 'none', backgroundColor: 'whitesmoke'}}>
            <img src={three} alt="" />
            <Card.Body>
            <div className='things-font'>
              <h4>The wonderful world of urban mobility.</h4>
              <p><b>January 28, 2024</b></p>
              <p>
              Urban mobility refers to the movement of people and goods within a city or urban area. It encompasses various modes of transportation, infra.. <a href="" style={{textDecoration: 'none', color: 'green'}}><span>Read more</span></a>
              </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

    </Row>


    
    <div className='blog-btn'>
            <button style={{fontFamily: 'Poppins'}}>View All Blogs</button>
            </div>


 </div>
 </div>

    
  )
}

export default Blogs;