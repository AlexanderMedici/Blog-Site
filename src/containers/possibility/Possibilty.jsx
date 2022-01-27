import React from "react"; 
import "./possibility.css"
import possibilityImage from "../../assets/possibility.png"


const possibility = () => {
    return (
        <div className="ai__possibility section__padding" id="Possibility">
            <div className=" ai__possibility-image">
                <img src={ possibilityImage}  alt="possibility"/>
            </div>
            <div className="ai__possibility-content">
                <h4>
                    Request Early Access To Get Started
                </h4>
                <h1 className="gradient__text" >
                    Make use of your data to grow your business
                </h1>
                <p>Our core solutions use best-of-breed technology to give you huge scale, security and availability so you can focus on your business.</p>
                <h4> Request Early Access To Get Started</h4>
            </div>
        </div>
    )
}

export default possibility
