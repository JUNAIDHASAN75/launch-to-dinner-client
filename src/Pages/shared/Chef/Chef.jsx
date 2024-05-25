import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {id, name, likes, picture, recipes,experience} = chef;
    // console.log(chef)
    return (
        <Col sm={1}>
          <Card className='h-75 border-0'>
            <Card.Img variant="top" src={picture}  className='w-100 h-50'/>
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