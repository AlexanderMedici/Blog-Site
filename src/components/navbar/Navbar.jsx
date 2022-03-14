import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; 
import logo from "../../assets/digitalai2.svg"
import "./navbar.css"




const Navbar = () => {
    let [toggleMenu, setToggleMenu] = useState(false); 
    return (
        <div className = "ai__navbar">
            <div className="ai__navbar-links">
                <div className="ai__navbar-links_logo">
                    <img src={ logo} alt="logo"/>
                </div> 
                <div className="ai__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wpa">What is People.AI</a></p>
                    <p><a href="#Possibility">Open AI</a></p>
                    <p><a href="#Features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                    </div>
            </div>
            <div className="ai__navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="ai__navbar-menu">
                 {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                     : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="ai__navbar-menu_container scale-up-center">
                <div className="ai__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#wai">What is People.Ai?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>
          </div>
          <div className="ai__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
        </div>
        )}
            </div>
        </div>
    )
}

export default Navbar
