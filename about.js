import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h1>About Us</h1>
          <p>Welcome to our blog! We share interesting articles on various topics. Stay tuned for more updates!</p>
        </Col>
        <Col md={6}>
          <img src="path_to_about_image" alt="About us" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
