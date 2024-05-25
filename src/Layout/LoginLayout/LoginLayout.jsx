import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarLayout from '../NavbarLayout/NavbarLayout';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <NavbarLayout></NavbarLayout>
            <Container>
            <Outlet></Outlet>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default LoginLayout;