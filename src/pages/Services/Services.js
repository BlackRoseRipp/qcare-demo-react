import React from 'react';
import { FaClinicMedical, FaHome, FaPhoneAlt, FaShuttleVan } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    return (
        <div>
            <div className="services-hero-container">
                <div className="container-lg my-auto">
                    <div className="hero-body text-center">
                        <h6 className="hero-header">Urgent care and preventative healthcare for all ages in New York City</h6>
                        <p className="hero-text">
                            When you or your loved one have an urgent illness or an accident, 
                            you need access to medical care that’s immediate and convenient. 
                            At QCare, we provide a full array of services for New York City 
                            residents of every age – from infants to seniors.
                        </p>
                        <a className="btn btn-hero" href="/plan-your-visit" role="button">Plan Your Next Visit</a>
                    </div>
                </div>
            </div>
            <div className="white-container container">
                <div className='row w-100 mx-0 mt-5'>
                    <div className='col-lg-5 d-flex flex-column justify-content-center'>
                        <h3 className='red-header text-right'>Access care you need,<br></br> When you need it</h3>
                    </div>
                    <div className='col-lg-7'>
                        <div className="vstack">
                            <a className='btn btn-care text-right' href='/home-visits'>
                                <FaHome className='red-icon' />&nbsp; Schedule a house call
                            </a>
                            <a className='btn btn-care text-right' href='/mobile-stations'>
                                <FaShuttleVan className='red-icon' />&nbsp; Stop by a QCare mobile care station near you for a walk-in visit
                            </a>
                            <a className='btn btn-care text-right' href='tel:877-722-7318'>
                                <FaPhoneAlt className='red-icon' />&nbsp; Call to schedule a visit at your convenience
                            </a>
                            <a className='btn btn-care text-right' href='/locations'>
                                <FaClinicMedical className='red-icon' />&nbsp; Visit one of our full clinic locations
                            </a>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <a href='/plan-your-visit' className='btn btn-red'>Plan Your Visit</a>
                </div>
            </div>
        </div>
    )
}

export default Services