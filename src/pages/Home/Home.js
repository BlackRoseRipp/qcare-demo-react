import React from 'react';
import { FaClinicMedical, FaHeartbeat, FaHome, FaMobileAlt, FaPhoneAlt, FaRegCalendar, FaRegCalendarAlt, FaShuttleVan, FaUserNurse, FaWalking } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { IoDocumentsSharp, IoSpeedometer } from 'react-icons/io5';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { RiUserHeartFill } from 'react-icons/ri';
import Data from '../../components/Locations/Data';
import StoreLocator from '../../components/Locations/StoreLocator';
import './Home.css';

const Home = () => {
    return(
        <div>
            <div className="hero-container">
                <div className="container-lg">
                    <div className="hero-body text-center">
                        <h6 className="hero-text">Healthcare when and where you need it.</h6>
                        <a className="btn btn-main" href="#" role="button">Book an Appointment</a>
                    </div>
                </div>
            </div>
            <div className='card info-card'>
                <div className="card-body">
                    <div className="hstack gap-3">
                        <div className='info-card-about py-4'>
                            <div className='row'>
                                <div className='col-2'>
                                    <FaHeartbeat style={{fontSize: '3.5rem' ,color: 'white'}}/>
                                </div>
                                <div className='col-10'>
                                    <h6 className="info-header-second">Say hello when you walk by</h6>
                                    <h6 className="info-header-main">Stop by when you need us</h6>
                                </div>
                            </div>
                            <p className='info-text my-4'>
                                At QCare, we provide New York City residents with convenient, 
                                quality healthcare that doesn’t interrupt your day.
                            </p>
                        </div>
                        <div className='vr'></div>
                        <hr className='hr'></hr>
                        <div className='check-list py-4'>
                            <p className='check-list-text'>
                                <MdOutlineCheckBox />&nbsp; <span className='text-decoration-line-through'>Order groceries</span>
                            </p>
                            <p className='check-list-text'>
                                <MdOutlineCheckBox />&nbsp; <span className='text-decoration-line-through'>Book a rideshare</span>
                            </p>
                            <p className='check-list-text'>
                                <MdOutlineCheckBoxOutlineBlank />&nbsp; <span>Schedule healthcare exam</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-container d-flex flex-column justify-content-center'>
                <div className='container-lg text-center'>
                    <h2 className='about-header-second'>When you’re short on time, sudden illness or injury is a major disruption.</h2>
                    <h2 className='about-header-main'>That’s why we’re making accessing medical care as easy as ordering dinner.</h2>
                    <img className='about-img' src='assets/img/convenience-graphic.png' />
                </div>
            </div>
            <div className='doctor-container'>
                <h2 className='section-header-white'>The Doctor is in!</h2>
                <div className='row g-5 container-lg mx-auto my-4'>
                    <div className='col-lg-4 col-md-6 text-center'>
                        <div className='doctor-icon'><FaClinicMedical /></div>
                        <h3 className='doctor-header'>Full Clinic</h3>
                        <p className='doctor-text'>
                            We manage most urgent care visits in our mobile vans. For 
                            more complicated or vulnerable care visits, we may recommend
                            patients visit one of our full service urgent care centers 
                            around the NYC area.
                        </p>
                    </div>
                    <div className='col-lg-4 col-md-6 text-center'>
                        <div className='doctor-icon'><FaShuttleVan /></div>
                        <h3 className='doctor-header'>Mobile Clinic</h3>
                        <p className='doctor-text'>
                            We’re building a fleet of fully-equipped mobile urgent care 
                            vans that we’re strategically parking throughout the NYC area 
                            and five boroughs. We offer care where you need it and when 
                            you need it most, with convenient location-based hours. 
                            Schedule an appointment or walk in.
                        </p>
                    </div>                    
                    <div className='col-lg-4 col-md-6 text-center'>
                        <div className='doctor-icon'><FaHome /></div>
                        <h3 className='doctor-header'>Home Call</h3>
                        <p className='doctor-text'>
                            We provide home visits for eligible seniors and those who are 
                            disabled.
                        </p>
                    </div>
                </div>
                <a className="btn btn-lite mt-5" href="/plan-your-visit" role="button">Plan Your Visit</a>
            </div>
            <div className='location-container container-lg'>
                <h2 className='location-header mb-5 text-center'>Meeting New York patients anywhere you are!</h2>
                <div className='map-container'>
                    <StoreLocator locations={Data()} />
                </div>
                <div className='mx-auto text-center'>
                    <a className="btn btn-locations mt-5" href="/location" role="button">See all of our locations</a>
                </div>
            </div>
            <div className='services-container text-center'>
                <h2 className='section-header-white'>Customizable healthcare when and where you need it most</h2>
                <div className='container-lg py-5'>
                    <div className='row g-4 mx-auto'>
                        <div className="col-md-3 col-sm-6 text-center">
                            <a href="#" className="service-button ">
                                <img className='service-icon-img' src='assets/img/covid-testing-img.png' />
                                <span className='service-icon-text'>COVID-19 Testing</span>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <a href="#" className="service-button ">
                                <img className='service-icon-img' src='assets/img/trauma-care-img.png' />
                                <span className='service-icon-text'>Trauma Care</span>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <a href="#" className="service-button ">
                                <img className='service-icon-img' src='assets/img/womens-health-img.png' />
                                <span className='service-icon-text'>Women's Health</span>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <a href="#" className="service-button ">
                                <img className='service-icon-img' src='assets/img/pediatric-care-img.png' />
                                <span className='service-icon-text'>Pediatric Care</span>
                            </a>
                        </div>
                    </div>
                    <div className='row g-4 mx-auto'>
                        <div className='col-md-2'></div>
                        <div className="col-md-2 col-sm-6 text-center">
                            <a href="#" className="service-button ">
                                <img className='service-icon-img' src='assets/img/xray-img.png' />
                                <span className='service-icon-text'>X-Ray</span>
                            </a>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center">
                            <a href="#" className="service-button ">
                                <img className='service-icon-img' src='assets/img/allergies-img.png' />
                                <span className='service-icon-text'>Allergies & Asthma</span>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-6 text-center">
                            <a href="#" className="service-button ">
                                <img className='service-icon-img' src='assets/img/vaccination-img.png' />
                                <span className='service-icon-text'>Vaccinations</span>
                            </a>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                </div>
                <a className='btn btn-lite-red mt-3' href='/services'>See All of Our Services</a>
            </div>
            <div className='quick-container container-lg'>
                <h2 className='section-header-second'>Quick registration, Quick testing, Quick results</h2>
                <div className='vstack py-5'>
                    <div className='quick-bar-blue quick-gap'>
                        <FaWalking className='quick-icon' />
                        <span className='quick-text'>&nbsp; Walk-in or schedule an appointment</span>
                    </div>
                    <div className='quick-bar-red quick-gap'>
                        <span className='quick-text'>Quick, contactless sign in through our app or location kiosks &nbsp;</span>
                        <FaMobileAlt className='quick-icon' />
                    </div>
                    <div className='quick-bar-blue quick-gap'>
                        <FiClock className='quick-icon' />
                        <span className='quick-text'>&nbsp; Location-based hours from the early morning to the late evening and weekends too</span>
                    </div>
                    <div className='quick-bar-red quick-gap'>
                        <span className='quick-text'>Board-certified physicians, nurse practitioners, physician assistants and nurses &nbsp;</span>
                        <FaUserNurse className='quick-icon' />
                    </div>
                    <div className='quick-bar-blue quick-gap'>
                        <RiUserHeartFill className='quick-icon' />
                        <span className='quick-text'>&nbsp; Personalized, comprehensive care from a friendly provider you know, thanks to our low staff turnover</span>
                    </div>
                    <div className='quick-bar-red quick-gap'>
                        <span className='quick-text'>Fast and reliable lab test results, usually within 24 hours &nbsp;</span>
                        <IoSpeedometer className='quick-icon' />
                    </div>
                </div>
            </div>
            <div className='goodbye-container'>
                <div className='row'>
                    <div className='col-md-5 goodbye-heading container-lg'>
                        <h2 className='goodbye-heading-text'>Say goodbye to…</h2>
                    </div>
                    <div className='col-md-7 goodbye-list container-lg'>
                        <div className='quick-bar-blue quick gap'>
                            <IoDocumentsSharp className='quick-icon' />
                            <span className='quick-text'>Filling out multiple forms at every visit</span>
                        </div>
                        <div className='quick-bar-blue quick gap'></div>
                        <div className='quick-bar-blue quick gap'></div>
                    </div>
                </div>
            </div>
            <div className='health-lib-container d-flex flex-column justify-content-center'>
                <h2 className='section-header-second text-start'>We help you care for</h2>
                <h2 className='section-header-main text-start'>Yourself and Your Family</h2>
                <p className='health-text'>
                    Check out these wellness tips and the research that backs them up to better understand 
                    how to optimize your health and nutrition.
                </p>
                <div className='row g-4 mx-auto'>
                    <div className='col-lg-4 col-md-6'>
                        <a href='/blog1'>
                            <div className='card health-lib-card'>
                                <img className='card-img-top' src='assets/img/blog1.jpg' alt='blog1' />
                                <div className='card-body'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Malesuada proin libero nunc consequat interdum varius 
                                        sit amet mattis. Tincidunt augue interdum velit euismod in 
                                        pellentesque massa.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <a href='/blog2'>
                            <div className='card health-lib-card'>
                                <img className='card-img-top' src='assets/img/blog2.jpeg' alt='blog2' />
                                <div className='card-body'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Malesuada proin libero nunc consequat interdum varius 
                                        sit amet mattis. Tincidunt augue interdum velit euismod in 
                                        pellentesque massa.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <a href='/blog3'>
                            <div className='card health-lib-card'>
                                <img className='card-img-top' src='assets/img/blog3.jpg' alt='blog3' />
                                <div className='card-body'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Malesuada proin libero nunc consequat interdum varius 
                                        sit amet mattis. Tincidunt augue interdum velit euismod in 
                                        pellentesque massa.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home