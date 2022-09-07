import React from 'react';
import { FaBriefcaseMedical, FaNotesMedical } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TbStethoscope } from 'react-icons/tb';
import './Home.css';

const Home = () => {
    return(
        <div>
            <div className="hero-container">
                <div className="container-lg">
                    <div className="hero-body">
                        <h6 className="hero-text">Your Health. Our Mission.</h6>
                        <a className="btn btn-main" href="#" role="button">Book an Appointment</a>
                    </div>
                </div>
            </div>
            <div className="services-container container-lg">
                <h2 className="section-header">Our Services</h2>
                <div className="row">
                    <div className="col-lg-4 text-center px-5">
                        <FaBriefcaseMedical className='icon' />
                        <h5 className='service-header'>Preventative</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis
                        </p>
                        <a className='learn-link' href='#'>Learn More <MdKeyboardArrowRight /></a>
                    </div>
                    <div className="col-lg-4 text-center px-5">
                        <TbStethoscope className='icon' />
                        <h5 className='service-header'>Diagnostics</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis
                        </p>
                        <a className='learn-link' href='#'>Learn More <MdKeyboardArrowRight /></a>
                    </div>
                    <div className="col-lg-4 text-center px-5">
                        <FaNotesMedical className='icon' />
                        <h5 className='service-header'>Treatment</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis
                        </p>
                        <a className='learn-link' href='#'>Learn More <MdKeyboardArrowRight /></a>
                    </div>
                </div>
            </div>
            <div className='about-container d-flex flex-column justify-content-center'>
                <div className='container-lg'>
                    <h2 className='section-header text-start'>What We Do</h2>
                    <div className='row g-5'>
                        <div className='col-lg-7'>
                            <p>
                                Our friendly staff treats each patient like family and understands 
                                the needs of the community. Besides handling all your urgent care 
                                needs, from injuries to a sudden illness, the team at QCare conveniently 
                                provides routine and specialty physicals for work, school or immigration 
                                needs, as well as vaccinations and medical care for people traveling abroad.
                                <br></br>
                                <br></br>
                                Qcare is a fully equipped medical clinic that offers the latest in medical 
                                diagnostic technology including digital X-rays and an on-site lab for bloodwork 
                                and urinalysis, so there’s no need to go to another clinic or facility for 
                                additional testing.
                            </p>
                            <div className="row gy-4">
                                <div className="col-lg-3 text-center">
                                    <a href="#" className="about-button ">
                                        <img className='about-icon-img' src='assets/img/covid-testing-img.png' />
                                        <span className='about-icon-text'>COVID-19 Testing</span>
                                    </a>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <a href="#" className="about-button ">
                                        <img className='about-icon-img' src='assets/img/trauma-care-img.png' />
                                        <span className='about-icon-text'>Trauma Care</span>
                                    </a>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <a href="#" className="about-button ">
                                        <img className='about-icon-img' src='assets/img/womens-health-img.png' />
                                        <span className='about-icon-text'>Women's Health</span>
                                    </a>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <a href="#" className="about-button ">
                                        <img className='about-icon-img' src='assets/img/pediatric-care-img.png' />
                                        <span className='about-icon-text'>Pediatric Care</span>
                                    </a>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <a href="#" className="about-button ">
                                        <img className='about-icon-img' src='assets/img/covid-testing-img.png' />
                                        <span className='about-icon-text'>COVID-19 Testing</span>
                                    </a>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <a href="#" className="about-button ">
                                        <img className='about-icon-img' src='assets/img/covid-testing-img.png' />
                                        <span className='about-icon-text'>COVID-19 Testing</span>
                                    </a>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <a href="#" className="about-button ">
                                        <img className='about-icon-img' src='assets/img/covid-testing-img.png' />
                                        <span className='about-icon-text'>COVID-19 Testing</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <img className='about-img' src='assets/img/lab-services-img.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='locations-container d-flex justify-content-center'>
                <a className="btn btn-lite" href="#" role="button">Find a Location</a>
            </div>
            <div className='insurance-container container-lg'>
                <div className='row'>
                    <div className='col-lg-4 d-flex flex-column justify-content-center'>
                        <div className='insurance-title'>
                            <h3 className='insurance-header'>
                                We accept most insurance companies.<hr style={{width: '3rem', border: '1px solid black', opacity: '1'}}></hr>
                            </h3>
                            <a className="insurance-link" href='#'>Click Here for a complete list of insurances.</a>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='row insurance-gallery'>
                            <div className='col-lg-3'>
                                <img className='home-img' src='assets/img/aetna.png' alt='aetna' />
                            </div>
                            <div className='col-lg-3'>
                                <img className='home-img' src='assets/img/affinity-health-plan.png' alt='affinity-health-plan' />
                            </div>
                            <div className='col-lg-3'>
                                <img className='home-img' src='assets/img/bcbs.png' alt='bcbs' />
                            </div>
                            <div className='col-lg-3'>
                                <img className='home-img' src='assets/img/cigna.png' alt='cigna' />
                            </div>
                            <div className='col-lg-3'>
                                <img className='home-img' src='assets/img/elder-plan-homefirst.png' alt='elder-plan' />
                            </div>
                            <div className='col-lg-3'>
                                <img className='home-img' src='assets/img/emblem.png' alt='emblem' />
                            </div>
                            <div className='col-lg-3'>
                                <img className='home-img' src='assets/img/ghi.png' alt='ghi' />
                            </div>
                            <div className='col-lg-3'>
                                <img className='home-img' src='assets/img/great-west-healthcare.png' alt='great-west-healthcare' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='vroom-container container-lg'>
                <h2 className='section-header fst-italic'>"On the Road to Healthy Living"</h2>
                <img className='van-img' src='assets/img/QCare_vanDesign_preview9d.jpg' alt='vans' />
            </div>
            <div className='health-lib-container d-flex flex-column justify-content-center'>
                <h2 className='section-header text-white text-start'>Health Library</h2>
                <div className='row gx-4 mx-auto'>
                    <div className='col-lg-4'>
                        <a href='#'>
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
                    <div className='col-lg-4'>
                        <a href='#'>
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
                    <div className='col-lg-4'>
                        <a href='#'>
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