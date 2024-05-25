import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
  const { id, name, likes, picture, recipes, experience } = chef;
  // console.log(chef)
  return (
    <Col sm={1}>
      <Card style={{  }}>
        <Card.Img variant="top" src={picture} style={{ height: '18rem' }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Years of Experience: {experience} Years</Card.Text>
              <Card.Text>Recipes: {recipes}</Card.Text>
              <Card.Text>Likes:  {likes}</Card.Text>
              <Link to={`/chef/${id}`}><Button>View Recipes</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Chef;