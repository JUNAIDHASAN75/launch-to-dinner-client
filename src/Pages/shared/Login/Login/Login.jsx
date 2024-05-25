import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../../firebase.config/firebase.config';


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const { signIn } = useContext(AuthContext);
    const navigate =useNavigate();
    const location = useLocation();
    console.log('login page location' , location)
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event  =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGithubSignIn =() =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <Container className='w-50 w-lg-50 my-5 pt-5 bg-dark bg-opacity-10 p-3 rounded-3'>
            <Form onSubmit={handleLogin}>
                <h2 className='text-center'>log In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted d-block text-center">
                    Don't Have an Account ? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-muted">

                </Form.Text>
                <Form.Text className="text-muted">

                </Form.Text>
                
            </Form>
            <Button onClick={handleGoogleSignIn} className='mt-5 me-3' variant="outline-primary">Google SignIn</Button>
            <Button onClick={handleGithubSignIn} className='mt-5' variant="outline-dark">GitHub SignIn</Button>
        </Container>
        </div>
        
    );
};

export default Login;