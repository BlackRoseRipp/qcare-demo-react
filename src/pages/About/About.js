import React from 'react';
import { FaClinicMedical, FaHeart, FaHome, FaShuttleVan, FaSyringe, FaVials, FaWalking, FaXRay } from 'react-icons/fa';
import { IoIosBeaker } from 'react-icons/io';
import { IoBandageSharp } from 'react-icons/io5';
import { MdBiotech } from 'react-icons/md';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-hero-container">
                <div className="container-lg my-auto">
                    <div className="hero-body text-center">
                        <h6 className="hero-header">Urgent and preventative healthcare when and where you need it</h6>
                        <p className='hero-text'>
                            A sudden sickness or injury can leave you feeling lousy while also disrupting your carefully 
                            planned schedule. Our QCare mobile urgent care provides New Yorkers access to quick, convenient, 
                            expert medical care anywhere you are.
                        </p>
                        <a className="btn btn-hero" href="/nyc-urgent-care-services" role="button">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="white-container-5">
                <div className='container-lg'>
                    <h3 className="section-header-blue">Access Our Care</h3>
                </div>
                <div className="row w-100 mx-0">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="container-fluid">
                            <p className="description container">
                                At QCare, we’re designing healthcare to meet the needs of our 
                                fast-paced city. In a world where you order coffee or a rideshare 
                                in a minute, scheduling an exam or lab test should be just as easy.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 about-access-container">
                        <div className="vstack">
                            <div className="access-item hstack">
                                <FaHome className='access-icon' />
                                <h6 className='access-text'>House calls</h6>
                            </div>
                            <div className="access-item hstack">
                                <FaShuttleVan className='access-icon' />
                                <h6 className='access-text'>Mobile urgent care stations</h6>
                            </div>
                            <div className="access-item hstack">
                                <FaWalking className='access-icon' />
                                <h6 className='access-text'>Walk-in visits</h6>
                            </div>
                            <div className="access-item hstack">
                                <FaClinicMedical className='access-icon' />
                                <h6 className='access-text'>Full clinic care</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-5">
                    <a href='/appointment' className='btn btn-hero mx-auto'>
                        Schedule an Appointment
                    </a>
                </div>
            </div>
            <div className="red-container">
                <h3 className='section-header-white'>Rely on us for convenient access to…</h3>
                {/* <div className='carousel slide' id='aboutSlide'>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#aboutSlide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#aboutSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#aboutSlide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#aboutSlide" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#aboutSlide" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#aboutSlide" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#aboutSlide" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    </div>
                    <div className='carousel-inner justify-content-center mx-auto'>
                        <div className='carousel-item active'>
                            <div className='about-care-item'>
                                <IoBandageSharp className='access-icon about-icon' />
                                <div className='access-text ps-0'>Urgent care, from illness to injury</div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='about-care-item'>
                                <FaHeart className='access-icon about-icon' />
                                <div className='access-text ps-0'>Routine and specialty wellness physicals for school, work or immigration</div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='about-care-item'>
                                <FaSyringe className='access-icon about-icon' />
                                <div className='access-text ps-0'>Vaccinations and medical care for traveling abroad</div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='about-care-item'>
                                <MdBiotech className='access-icon about-icon' />
                                <div className='access-text ps-0'>State-of-the-art medical diagnostic technology</div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='about-care-item'>
                                <FaXRay className='access-icon about-icon' />
                                <div className='access-text ps-0'>Digital X-rays</div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='about-care-item'>
                                <FaVials className='access-icon about-icon' />
                                <div className='access-text ps-0'>Bloodwork</div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='about-care-item'>
                                <IoIosBeaker className='access-icon about-icon' />
                                <div className='access-text ps-0'>Urinalysis</div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#aboutSlide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#aboutSlide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}
                <div className='hstack gap-3 d-flex align-items-start'>
                    <div className='about-care-item'>
                        <IoBandageSharp className='access-icon about-icon' />
                        <div className='access-text ps-0'>Urgent care, from illness to injury</div>
                    </div>
                    <div className='about-care-item'>
                        <FaHeart className='access-icon about-icon' />
                        <div className='access-text ps-0'>Routine and specialty wellness physicals for school, work or immigration</div>
                    </div>
                    <div className='about-care-item'>
                        <FaSyringe className='access-icon about-icon' />
                        <div className='access-text ps-0'>Vaccinations and medical care for traveling abroad</div>
                    </div>
                    <div className='about-care-item'>
                        <MdBiotech className='access-icon about-icon' />
                        <div className='access-text ps-0'>State-of-the-art medical diagnostic technology</div>
                    </div>
                    <div className='about-care-item'>
                        <FaXRay className='access-icon about-icon' />
                        <div className='access-text ps-0'>Digital X-rays</div>
                    </div>
                    <div className='about-care-item'>
                        <FaVials className='access-icon about-icon' />
                        <div className='access-text ps-0'>Bloodwork</div>
                    </div>
                    <div className='about-care-item'>
                        <IoIosBeaker className='access-icon about-icon' />
                        <div className='access-text ps-0'>Urinalysis</div>
                    </div>
                </div>
                <div class="about-description py-4">
                    We’re new to urgent care but well known in New York City. Our mobile COVID test 
                    stations have served New Yorkers in every neighborhood since spring 2020. 
                    We’re now outfitting our mobile vans as urgent care stations.
                    <br></br>
                    <br></br>
                    We’ve added full walk-in clinics and telehealth, as well as house calls for 
                    seniors and those who are disabled, to serve New York CIty residents with every 
                    convenient care model possible.
                </div>
            </div>
            <div className="white-container-5">
                <div className="container-lg">
                    <h3 className="section-header-red">Get to know your neighborhood medical provider</h3>
                    <div className="row w-100" id='teamRow'>
                        <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center">
                            <div className="team-button">
                                <a href="/team" className="btn btn-team">
                                    <img src='assets/img/lab-services-img.jpg' className='team-img' />
                                    <span className="team-button-text">Meet the Team</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 d-flex flex-column justify-content-center">
                            <div className="team-description">
                                We staff each mobile station with the same nurses, nurse practitioners, 
                                physicians assistants and medical doctors each day. Our goal is for you 
                                to get to know your neighborhood medical provider for preventative care 
                                so that you can depend on us every time, even for urgent care.
                                <br></br><br></br>
                                Get to know your local provider as you walk by every day. Stop by when 
                                you need us.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About