import { signOut } from 'firebase/auth';
import React from 'react';
import {  Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <header>
            <>
                <Navbar collapseOnSelect expand="lg" sticky ="top" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img width='50px' height="auto" src={logo}  alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"> 
                            </Nav> 
                            <Nav>
                                <CustomLink as ={Link} to="/home#service">Service</CustomLink>  
                            </Nav>
                            <Nav>
                                <CustomLink to="/blog">Blog</CustomLink>  
                            </Nav>
                            <Nav>
                                <CustomLink to="/about">About</CustomLink>  
                            </Nav>
                            <Nav>
                                {
                                    user ? 
                                    <Button className="signOutBtn" onClick={handleSignOut}>Sign Out</Button>
                                    :
                                    <CustomLink to="/login">Login</CustomLink>
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