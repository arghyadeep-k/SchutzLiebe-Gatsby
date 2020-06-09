import React from "react"
import "./layout.css"

function Navbar() {

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function clickFunc() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }


    return (
        <div className="topnav" id="myTopnav">
            <div>
                <img className="logo" src={require("../images/logo.jpg")} alt="logo.jpg" />
            </div>
            <div id="main-nav-2">
            <a href="#contact" id="button">Contact Us</a>
            <a href="#news">For Sale</a>
            <a href="#contact">testimonies</a>
            <div className="dropdown">
                <button className="dropbtn">
                    Rottweiler Information
                <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                    <a href="#">Breed Standards</a>
                    <a href="#">Jlpp</a>                    
                    <a href="#">Diet</a>                    
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">
                    News
                <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                    <a href="#">General</a>
                    <a href="#">Upcoming Litters</a>                    
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">
                    Our Dogs
                <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                    <a href="#">Males</a>
                    <a href="#">Females</a>                    
                </div>
            </div>
            <a href="#about">Home</a>
            </div>
            <a href="javascript:void(0);" className="icon" onClick={clickFunc}>
                ☰
            </a>
        </div>
    );
}


export default Navbar
