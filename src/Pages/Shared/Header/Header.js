import { signOut } from 'firebase/auth';
import React from 'react';
import {  Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <header>
            <>
                <Navbar collapseOnSelect expand="lg" sticky ="top" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img height='30px' src={logo}  alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="home#service">Service</Nav.Link>
                                <Nav.Link href="home#experts">Experts</Nav.Link>
                                 
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>  
                            </Nav>
                            <Nav>
                                {
                                    user ? 
                                    <Button onClick={handleSignOut}>Sign Out</Button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }  
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </header>
    );
};

export default Header;