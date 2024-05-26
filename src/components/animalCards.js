import React from "react";
import './animalcard.css';

const AnimalCards=({type,imageSrc,emri,origjina,setPopupAnimal,handleShow,animal})=>{

    function forClick(){
        setPopupAnimal(animal);
        handleShow();
    }


    return(
        <div onClick={forClick} className="animalCard">
            <div className="animalPhoto">
                <img width="100%" height="150px" src={imageSrc}></img>
            </div>
            <p>Name : {emri}</p>
            {type!="birds" &&(
            <p>Origin : {origjina}</p>
        )}
        </div>
    )
}

export default AnimalCards;