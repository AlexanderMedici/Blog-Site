import React from "react"; 
import "./what.css"; 
import Feature from '../../components/feature/Feature';




const What = () => {
    return (
        <div className="ai__whatai section__margin" id="wpa" >
            <div className="ai__whatai-feature">
            <Feature title ="What is People.AI" text="We are all familiar with this old world that is dying, the old world that is passing away, we have lived with it, we have seen it ,  We deliver innovative data & AI solutions to help customers build a data-driven culture and empower their business decisions with insights.
"/>
            </div>
            <div className="ai__whatai-heading">
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p> Explore the Library</p>
            </div>
            <div className="ai__whatai-container">
                <Feature title="Data Strategy" text="Move away from traditional practices and adapt a data-centric approach which will present actionable data with which your business can grow.   "/>
                <Feature title="Advanced Analytics" text="Move from traditional BI to Predictive Analytics to unlock additional insights and find the value in your data."  />
                <Feature title="Digital Transformation" text="Accelerate your business transformation with our proven methodologies, process automation and modern data platforms."/>
            </div>
        </div>
    )
}

export default What
