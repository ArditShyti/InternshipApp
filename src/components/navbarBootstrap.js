import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownButton, NavDropdown} from 'react-bootstrap';
import axios from 'axios';
import SplitButton from 'react-bootstrap/SplitButton';
import CustomDropdown from './mdbdropdown';
import { Navigate, useNavigate } from 'react-router-dom';
import './about.css';


function ColorSchemesExample() {

    const [dogsArr,setDogsArr]=useState([]);
    const navigate=useNavigate();
    const getDogs=async()=>{
        const response=await axios.get('https://freetestapi.com/api/v1/dogs');
        const dogs=response.data;
        setDogsArr(dogs);
        // console.log("response",response);
    }


    useEffect(() => {
        getDogs();
    },[])


    // for(let i=0;i<dogsArr.length;i++){
    //     dogsArr[i]
    // }

  return (
    <>
      <Navbar className="color-nav" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color:'white'}} onClick={() => navigate('/')}>About Us</Nav.Link>
            <DropdownButton   id="dropdown-basic-button" title="Animals">
            <Dropdown.Item onClick={() => navigate('/animals/dogs')}>Dogs</Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/animals/cats')}>Cats</Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/animals/birds')}>Birds</Dropdown.Item>
                {/* {dogsArr.map((item)=>{
                    return(
                    <Dropdown.Item href="#/action-1">{item.name}</Dropdown.Item>
                    )
                })} */}
            </DropdownButton>
            <Nav.Link style={{color:'white'}}  onClick={() => navigate('/contactus')}>Contact Us</Nav.Link>    
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;