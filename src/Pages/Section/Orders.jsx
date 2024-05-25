import React from 'react';
import { Container } from 'react-bootstrap';
import bgimg from '../../assets/images/orders.jpg'

const Orders = () => {
    return (
        <Container className='bg-img my-5'>
            <h2 className='text-center my-5'>Online Order </h2>
            <div className='position-relative'>
            <img className='img-fluid rounded-3' src={bgimg} alt="" /> 
            <h2 className='position-absolute top-0 text-white fs-1 p-5 '>Comming Soon..</h2>
            </div>
        </Container>
    );
};

export default Orders;