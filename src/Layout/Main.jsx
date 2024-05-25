import React from 'react';
import Header from '../Pages/shared/Header/Header';
import Footer from '../Pages/shared/Footer/Footer';
import Home from '../Pages/Home/Home/Home';
import NavbarLayout from './NavbarLayout/NavbarLayout';
import Services from '../Pages/Section/Services';
import Orders from '../Pages/Section/Orders';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavbarLayout></NavbarLayout>
            <Header></Header>
            <Outlet></Outlet>
            <Services></Services>
            <Orders></Orders>
            <Footer></Footer>
        </div>
    );
};

export default Main;