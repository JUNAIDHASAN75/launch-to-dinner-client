import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-black bg-opacity-75 text-white p-4'>
            <Container className='d-lg-flex justify-content-between align-items-start mt-5 g-5'>
                <div className='w-100'>
                    <h2 className='mb-3'>Good Food Good Health</h2>
                    <p className='mb-3'>Delicious, Fresh, and Authentic Indian Cuisine</p>
                    <p className=''><small>Indulge in the rich and diverse culinary traditions of India at <span>"Lunch To Dinner"</span>. Our chefs use only the freshest ingredients and authentic spices to create dishes that will transport your taste buds to the vibrant streets of India. From creamy curries to smoky tandoori dishes, we offer a wide range of options that will satisfy any appetite. Come and experience the warmth and hospitality of India at <span>"Lunch To Dinner"</span>.</small></p>
                </div>
                <div className='w-100 me-5'>
                    
                    <h2 className='ps-lg-5 ms-lg-5'>Contct Us </h2> 
                    <p className='ps-lg-5 ms-lg-5'><FaFacebookSquare /> </p>
                    <p className='ps-lg-5 ms-lg-5'>Twitter </p>
                    <p className='ps-lg-5 ms-lg-5'>Instagram </p>
                    
                </div>
            </Container>
                <div className='w-100 me-5 text-center bg-'>
                    <p className='ps-lg-5 ms-lg-5'>© {currentYear} Copyright: Launch To Dinner </p>
                    
                </div>
        </div>
    );
};

export default Footer;