import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-hero-container">
                <div className="container-lg my-auto">
                    <div className="hero-body text-center">
                        <h6 className="hero-header">Get to know your friendly New York neighborhood healthcare provider</h6>
                        <p className='hero-text'>
                            A sudden sickness or injury can leave you feeling lousy while also disrupting your carefully 
                            planned schedule. Our QCare mobile urgent care provides New Yorkers access to quick, convenient, 
                            expert medical care anywhere you are.
                        </p>
                        <a className="btn btn-hero" href="/services" role="button">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About