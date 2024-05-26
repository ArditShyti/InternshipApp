import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AnimalPopUp({show,handleClose,animal}) {


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{animal ? animal.name:""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={animal.image!=undefined ? animal.image:""} width="100%" height="250px" />
            <p>Animal Breed Group : {animal.breed_group ? animal.breed_group:""}</p>
            <p>Colors : </p>
            <ul>
            {animal.colors!=undefined && animal.colors.map((item)=>{
                return(
                <li>{item}</li>
                )
            })}
            </ul>
            <p>Description : {animal.description ? animal.description:""}</p>
            <p>Origin : {animal.origin ? animal.origin:""}</p>
            <p>Temperament : {animal.temperament ? animal.temperament:""}</p>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default AnimalPopUp;