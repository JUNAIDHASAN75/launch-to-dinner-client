import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../assets/images/img2.jpg'

const Services = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-center my-5'>Our Services</h2>
            <div className='d-lg-flex justify-content-between align-items-center my-5'>
                <div className='w-100 h-25'>
                    <img className='img-fluid h-50 rounded-3' src={img} alt="" />
                </div>
                <div className='w-100 ms-lg-5 mt-5 mt-lg-0'>
                    <h2 className='text-center'>Traditional Service</h2>
                    <div>
                        <article className='my-5'>1.Our service boys are responsible for taking orders from customers, serving food and beverages, clearing tables, and ensuring that the restaurant is clean and well-maintained.</article>
                        <article className='my-5'>2.Uniform: In Our restaurant, food service boys wear traditional Indian attire, such as a kurta-pajama, while in others they may wear a uniform that identifies them as part of the restaurant staff.</article>
                        <article className='my-5'>3.Tips: In Indian restaurants, it is common for customers to leave a tip for the food service boy, usually around 10-15% of the bill. These tips are an important source of income for food service boys, and they are often shared with other members of the restaurant staff.</article>
                    </div>

                    <h2 className='text-center'>Vip Service</h2>
                    <div>
                        <article className='my-5'>1.Our service boys are responsible for taking orders from customers, serving food and beverages, clearing tables, and ensuring that the restaurant is clean and well-maintained.</article>
                        <article className='my-5'>2.Uniform: In Our restaurant, food service boys wear traditional Indian attire, such as a kurta-pajama, while in others they may wear a uniform that identifies them as part of the restaurant staff.</article>
                        <article className='my-5'>3.Tips: In Indian restaurants, it is common for customers to leave a tip for the food service boy, usually around 10-15% of the bill. These tips are an important source of income for food service boys, and they are often shared with other members of the restaurant staff.</article>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Services;
