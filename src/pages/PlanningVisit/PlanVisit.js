import React from "react";
import { BsCreditCard2FrontFill } from 'react-icons/bs';
import { FaAddressCard, FaFileMedical, FaHandHoldingMedical } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import InsuranceSlider from '../../components/InsuranceSlider/InsuranceSlider';
import './PlanVisit.css';

const PlanVisit = () => {
    return (
        <div>
            <div className="planning-hero-container">
                <div className="container-lg my-auto">
                    <div className="hero-body text-center">
                        <h1 className="hero-header">Plan Your Visit</h1>
                        <h4 className='hero-text'>
                            No appointment needed! Access urgent care and preventative healthcare for all ages in New York City
                        </h4>
                    </div>
                </div>
            </div>
            <div className='white-container'>
                <div className='container text-center'>
                    <div className='row w-100 mx-0'>
                        <div className='col-lg-4 d-flex align-items-center justify-content-center'>
                            <div className='blue-container rounded-corners text-center py-0'>
                                <FaHandHoldingMedical className='heading-icon' />
                            </div>
                        </div>
                        <div className='col-lg-8 text-center text-lg-start d-flex align-items-center mt-lg-0 mt-4'>
                            <h2 className='blue-text'>
                                At QCare, we provide a full array of services for New York City residents of 
                                every age – from infants to seniors.
                            </h2>
                        </div>
                    </div>
                    <div className='text-center mt-lg-5'>
                        <a className="btn btn-blue mt-5" href="/locations" role="button">Find an NYC location near you</a>
                    </div>
                </div>
            </div>
            <div className='red-container'>
                <div className='container'>
                    <h2 className='white-header mb-lg-5 text-center'>What to Bring</h2>
                    <div className='row w-100 mx-0 g-5 mt-5'>
                        <div className="col-lg-4 d-flex align-items-center">
                            <div className="white-container py-0 rounded-corners">
                                <img src='assets/img/pexels-karolina-grabowska-5387256.jpg' className='left-white-img' />
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-7 d-flex flex-column justify-content-center white-container rounded-corners px-4">
                            <p className='red-text p-text text-center w-75 mx-auto'>
                                Let’s make your visit to Qcare as smooth and easy as possible. Here’s 
                                what you need to bring:
                            </p>
                            <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: 'fit-content'}}>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text red-text fw-semibold'><FaAddressCard className='list-icon'/>&nbsp; Driver’s license or photo ID</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text red-text fw-semibold'><BsCreditCard2FrontFill className='list-icon'/>&nbsp; Insurance information</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text red-text fw-semibold'><MdAttachMoney className='list-icon-md'/> Payment for co-pay or self pay</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text red-text fw-semibold'><FaFileMedical className='list-icon'/>&nbsp; Updated list of medications, allergies and past surgeries</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <a className='btn btn-lite-red' href='/appointment'>Book an Appointment with us!</a>
                    </div>
                </div>
            </div>
            <div className='white-container-3'>
                <h2 className="blue-header text-center" style={{marginTop: '0', fontSize: '3rem'}}>We Accept These Insurances</h2>
                <InsuranceSlider />
            </div>
        </div>
    )
}

export default PlanVisit