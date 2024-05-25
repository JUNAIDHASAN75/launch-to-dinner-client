import React, { useContext, useState } from 'react';
import NavbarLayout from '../../../../Layout/NavbarLayout/NavbarLayout';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProviders';
import Footer from '../../Footer/Footer';

const Register = () => {
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const { createUser } = useContext(AuthContext);
    

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo, email,password);
        if(password.length < 6){
            setError('please add at least 6 characters in your password')
            return;
        }

        createUser(email, password)
        .then(result=>{
            const createdUser = result.user;
            setError('')
            console.log(createdUser) 
            setSuccess('user has created successfully')
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div>
            <NavbarLayout></NavbarLayout>
            <Container className='w-25 my-5 pt-5 bg-dark bg-opacity-10 p-3 rounded-3'>
                <Form onSubmit={handleRegister}>
                    <h2 className='text-center'>Register</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter email" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter email" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name='accept' label="Accept Terms And Condition" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <Form.Text className="text-muted d-block text-center">
                        Already Have an Account ? <Link to="/login">Login</Link>
                    </Form.Text>
                    <Form.Text className="text-muted">
                                <p className='text-success'>{success}</p>
                    </Form.Text>
                    <Form.Text className="text-muted">
                            <p className='text-danger'>{error}</p>
                    </Form.Text>
                </Form>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;