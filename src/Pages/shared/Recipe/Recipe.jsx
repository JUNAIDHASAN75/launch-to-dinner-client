import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
  const [disable, setDisable ] = useState(false)
    const {id , name , rating, cooking_details, picture} = recipe;
  const handleDisalbed =()=>{
    toast('thanks for bookmartk')
    console.log('button click')
  }

    return (
        <Col sm={1}>
          <Card className=' mb-5 border-0 position-relative'>
            <Card.Img variant="top" src={picture}  className='w-100 h-50'/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>Rating: {rating} </Card.Text>
              
              <Card.Text className='mb-5'>{cooking_details}</Card.Text>
              <Button onClick={handleDisalbed} className='position-absolute bottom-0 '>Favorite</Button>
              <ToastContainer />
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Recipe; 