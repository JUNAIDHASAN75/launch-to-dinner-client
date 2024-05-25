import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import userImg from '../../assets/images/user.jpg'
import './navbar.css'

const NavbarLayout = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='text-dark'>
            <Container>
                <Navbar.Brand href="#home" className='h1 fs-3'>Lunch To Dinner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-5 ">

                        <Link className='ms-3 text-decoration-none text-dark' to='/'>Home</Link>
                        <Link className='ms-3 text-decoration-none text-dark' to='/blogs'>Blogs</Link>
                        <Link className='ms-3 text-decoration-none text-dark ' to='/about'>About</Link>


                    </Nav>
                    <Nav>
                        

                        {user ?
                            <div>
                                <img className='userimg me-3'  src={userImg} alt="" /> 
                                <span className="tooltiptext" >{user?.email}</span>
                                <Button onClick={handleLogOut} variant="primary">LogOut</Button>
                                
                                </div> :
                            <Link to='/login'>
                                <Button variant="primary">Login</Button>
                            </Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarLayout;