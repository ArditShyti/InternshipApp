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
            <p><b>Name : </b>{emri}</p>
            {type!="birds" &&(
            <p><b>Origin : </b>{origjina}</p>
        )}
        {type=="birds" &&(
        <p><b>Place of found : </b>{animal.place_of_found ? animal.place_of_found:""}</p>
    )}
        </div>

    )
}

export default AnimalCards;