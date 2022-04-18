import React from 'react';
import aboutmePhoto from '../../images/profile/Prodip Roy.png'
import './About.css'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="about-me">
                        <div className="col-md-7">
                            <h2>About <span>Me</span></h2>
                            <p>Become a web developer in my mission 2022. I will want to get a good job after learning completed web development. I believe that if I try to give my best level of effort that I will be a professional web developer.</p>
                            
                        </div>
                        <div className="col-md-5 mt-2">
                            <img width="80%" src={aboutmePhoto} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;