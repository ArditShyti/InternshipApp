import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimalCards from "../components/animalCards";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AnimalPopUp from "../components/animalPopUp";
import './animalpage.css';


const AnimalList=()=>{

    const { type } = useParams();
    const [animals, setAnimals] = useState([]);
    const [animalsSearch,setAnimalSearch]=useState("");
    const [popupAnimal,setPopupAnimal]=useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchAnimals = async () => {
        try {
          const response = await axios.get(`https://freetestapi.com/api/v1/${type}`);
          setAnimals(response.data);
          // console.log("animals",response.data);
        } catch (error) {
          console.error('Error fetching animals:', error);
        }
      };

      const fetchAnimalsBySearch = async () => {
        try {
          const response = await axios.get(`https://freetestapi.com/api/v1/dogs?search=${animalsSearch}`);
          setAnimals(response.data);
        //   console.log("animals",response.data);
        } catch (error) {
          console.error('Error fetching animals:', error);
        }
      };


    useEffect(() => {
      fetchAnimals();
    }, [type]);
    return(
        <div style={{"height":'100%',position:'fixed',width:'100%'}} className="animalList">
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">{type}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{setAnimalSearch(e.target.value)}}
            />
            <Button onClick={fetchAnimalsBySearch} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <div style={{marginBottom:"15px"}} className="animals">
                {animals && animals.map((item)=>{
                    return(
                    <AnimalCards type={type} animal={item} setPopupAnimal={setPopupAnimal}  handleShow={handleShow} imageSrc={item.image} emri={item.name} origjina={item.origin} />
                    )
                })}
            </div>
            <AnimalPopUp show={show} handleShow={handleShow} handleClose={handleClose} animal={popupAnimal} />
        </div>
    )
}

export default AnimalList;