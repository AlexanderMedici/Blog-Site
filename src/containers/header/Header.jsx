import React from 'react'; 
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/AI_HERO.svg"; 


const Header = () => {
    return (
        <div className="ai__header  section__padding" id="home">
            <div className="ai__header-content">
                <h1 className=" gradient__text"> 
                    People.AI Is?
                </h1>
                <p >
                    People AI is a data and AI consulting company that provides tailored end-to-end consulting services and solutions to help businesses transform their data into actionable insights and drive their business decisions.

                We specialise in building modern data platforms and the implementation of advanced analytics, everything  from data integration and consolidation, AI enablement, to visualization and reporting to surface the insights
                </p>
                <div className="ai__header-content__input">
                    <input type="Email" placeholder=" Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="ai__header-content__people">
                    <img src={ people } alt="people who signed up" />
                    <p>2800 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="ai__header-image">
                    <img src={ai} alt="ai"/>
            </div>
    </div>
    )
}

export default Header
