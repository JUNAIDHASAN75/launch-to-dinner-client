import React from 'react';
import { Container } from 'react-bootstrap';
import banner1 from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'

const Header = () => {
    return (
        <Container className='d-lg-flex justify-content-between align-items-center gap-5 my-5'>
            <div className='w-100 h-75'>
               <img className='img-fluid w-100 h-100 rounded-2' src={banner2} alt="" />
            </div>
            <div>
                <h1 className='fs-1 mb-5'>Good Food
                    
                    Good Health
                </h1>
                <p className='fs-3'>Delicious, Fresh, and Authentic Indian Cuisine</p>
            </div>
        </Container>
    );
};

export default Header;