import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AnimalPopUp({type,show,handleClose,animal}) {


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{animal ? animal.name:""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={animal.image!=undefined ? animal.image:""} width="100%" height="250px" />
            {type!="birds" && (
              <>
            <p><b>Animal Breed Group : </b>{animal.breed_group ? animal.breed_group:""}</p>
            <p><b>Colors : </b></p>
            <ul>
            {animal.colors!=undefined && animal.colors.map((item)=>{
                return(
                <li>{item}</li>
                )
            })}
            </ul>
            </>
      )}
            <p><b>Description : </b>{animal.description ? animal.description:""}</p>
            {type!="birds" && (
              <>
            <p><b>Origin : </b>{animal.origin ? animal.origin:""}</p>
            <p><b>Temperament : </b>{animal.temperament ? animal.temperament:""}</p>
            </>
          )}
          {type=="birds" && (
            <>
            <p><b>Species : </b>{animal.species ? animal.species:""}</p>
            <p><b>Family : </b>{animal.family ? animal.family:""}</p>
            <p><b>Habitat : </b>{animal.habitat ? animal.habitat:""}</p>
            <p><b>Place of found : </b>{animal.place_of_found ? animal.place_of_found:""}</p>
            <p><b>Diet : </b>{animal.diet ? animal.diet:""}</p>
            {animal.wingspan_cm && (
            <p><b>Wingspan (cm) : </b>{animal.wingspan_cm ? animal.wingspan_cm:""}</p>
          )}
          {animal.height_cm && (
            <p><b>Height (cm) : </b>{animal.height_cm ? animal.height_cm:""}</p>
          )}
            <p><b>Weight (kg) : </b>{animal.weight_kg ? animal.weight_kg:""}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AnimalPopUp;