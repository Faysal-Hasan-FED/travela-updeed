import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

const MyNavbar = () => {

    return (
      <Container>
        <Navbar style={{lineHeight:'30px'}} collapseOnSelect bg='dark' fixed='top' variant='dark' expand="lg" >
  <Container>
  <Navbar.Brand href="#home">Travela</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
     
      <NavLink to="home"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '50px' : '50px',
    textDecoration: isActive ? 'none' : 'none'
    })}> Home </NavLink>

      
      <NavLink to="about"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '50px' : '50px',
    textDecoration: isActive ? 'none' : 'none'
    })}> About </NavLink>
      
      <NavLink to="tour"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '50px' : '50px',
    textDecoration: isActive ? 'none' : 'none'
    })}> Tour </NavLink>
      
      <NavLink to="hotels"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '50px' : '50px',
    textDecoration: isActive ? 'none' : 'none'
    })}> Hotels </NavLink>
      
      <NavLink to="blogs"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '50px' : '50px',
    textDecoration: isActive ? 'none' : 'none'
    })}> Blogs </NavLink>
      
      <NavLink to="shop"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '50px' : '50px',
    textDecoration: isActive ? 'none' : 'none'
    })}> Shop </NavLink>

      <NavLink to="contact"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '50px' : '50px',
    textDecoration: isActive ? 'none' : 'none'
    })}> Contact </NavLink>


    <Button variant="danger">Add Listing</Button>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </Container>
    );
};

export default MyNavbar;