import React, { useState, useEffect,useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownButton, NavDropdown} from 'react-bootstrap';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import './about.css';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

function ColorSchemesExample() {
    const navigate=useNavigate();

  return (
    <>
      <Navbar className="color-nav" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Animals</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color:'white'}} onClick={() => navigate('/')}>About Us</Nav.Link>
            <DropdownButton   id="dropdown-basic-button" title="Animals">
            <Dropdown.Item onClick={() => navigate('/animals/dogs')}>Dogs</Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/animals/cats')}>Cats</Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/animals/birds')}>Birds</Dropdown.Item>
            </DropdownButton>
            <Nav.Link style={{color:'white'}}  onClick={() => navigate('/contactus')}>Contact Us</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;