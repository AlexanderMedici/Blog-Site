import React from 'react'; 
import Feature from '../../components/feature/Feature';
import "./features.css"
const featuresData = [
    {
        title: "Outcome Focused",
        text:"We believe all projects should focus on delivering real business value. Start with the business problem and work backwards with technology to solve it."
    },
    {
    title: 'Personal Experience ',
    text: 'We are not a body-shop nor do we oversell. We’ll provide a personal, hands-on approach to deliver your solution working with your business team.',
  },
  {
    title: 'Technical Expertise',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },

]

const Features = () => {
    return (
        <div className="ai__features section__padding" id="Features">
            <div className="ai__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="ai__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
                        ))}
                  </div>
        </div>
    )
}


export default Features; 
