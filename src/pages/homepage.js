import React from "react";
import ColorSchemesExample from "../components/navbarBootstrap";
import './homepage.css';
import AboutUs from "../components/aboutUs";

const HomePage=()=>{
    return(
        <div className="homePage">
            <ColorSchemesExample />
            <AboutUs />
        </div>
    )
}

export default HomePage;