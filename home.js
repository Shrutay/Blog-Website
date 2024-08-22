import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const posts = [
    { id: 1, title: "First Blog Post", excerpt: "This is a short description of the first post...", image: "path_to_image1" },
    { id: 2, title: "Second Blog Post", excerpt: "A summary of the second post goes here...", image: "path_to_image2" }
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Welcome to My Blog</h1>
      <Row>
        {posts.map(post => (
          <Col md={4} key={post.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <Link to={`/post/${post.id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
