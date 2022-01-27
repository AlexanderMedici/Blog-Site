import React from 'react'
import "./footer.css"; 
import aiLogo from "../../assets/logo.svg"; 

const Footer = () => (
        <div className="ai__footer section__padding">
            <div className="ai__footer-heading">
                <h1 className="gradient-text">Step into the Future</h1>
            </div>
            <div className="ai__footer-btn">
                <p>Request Early Access</p>
            </div>
           <div className="ai__footer-links">
      <div className="ai__footer-links_logo">
        <img src={aiLogo} alt="ai_logo" />
        <p>Toronto On L8L 1L1, <br /> All Rights Reserved</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ai__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="ai__footer-copyright">
      <p>@2021 People.AI. All rights reserved.</p>
    </div>
  </div>
);

export default Footer; 
