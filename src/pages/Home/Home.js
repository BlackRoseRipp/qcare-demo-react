import React from 'react';
import { FaHeartbeat, FaPhoneAlt, FaRegCalendar, FaRegCalendarAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TbStethoscope } from 'react-icons/tb';
import './Home.css';

const Home = () => {
    return(
        <div>
            <div className="carousel slide" id='heroSlideshow' data-bs-ride='carousel'>
                <div className="carousel-inner hero-container">
                    <div className="carousel-item active" id='slideOne' data-bs-interval='9000'>
                        <div className="container-lg">
                            <div className="hero-body text-center">
                                <h6 className="hero-text">Your Health. Our Mission.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" id='slideTwo' data-bs-interval='9000'>
                        <div className="container-lg">
                            <div className="hero-body text-center">
                                <h6 className="hero-text">Your Health. Our Mission.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" id='slideThree' data-bs-interval='9000'>
                        <div className="container-lg">
                            <div className="hero-body text-center">
                                <h6 className="hero-text">Your Health. Our Mission.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" id='slideFour' data-bs-interval='9000'>
                        <div className="container-lg">
                            <div className="hero-body text-center">
                                <h6 className="hero-text">Your Health. Our Mission.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card info-card'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-7">
                            <h6 className="info-header"><FaHeartbeat style={{fontSize: '2.5rem'}}/>&nbsp; Who we are</h6>
                            <p className='info-text my-4'>
                                QCare is a walk-in clinic that can handle any urgent medical matter for 
                                patients of all ages, from pediatric to the elderly. The clinic physicians 
                                are board-certified emergency room doctors with years of experience handling 
                                medical emergencies throughout the Metro New York area.
                            </p>
                            <a className="btn btn-faq" href='/team' role='button'>Learn More About Us</a>
                        </div>
                        <div className='col-lg-1 vr'></div>
                        <div className="col-lg-4">
                            <h6 className="info-header mb-3"><FiClock style={{fontSize: '2.5rem'}}/>&nbsp; Opening Hours</h6>
                            <div className='time-text'><FaRegCalendarAlt />&nbsp; Monday to Friday - 7AM to 10PM</div>
                            <hr style={{margin: '4px 0', color: 'white'}}></hr>
                            <div className='time-text'><FaRegCalendar />&nbsp; Saturday & Sunday - 7AM to 6PM</div>
                            <div className='info-text py-4'>You can also call us to schedule an appointment.</div>
                            <a className="btn btn-faq" href='tel:888-522-7247' role='button'><FaPhoneAlt />&nbsp; Call Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-container d-flex flex-column justify-content-center'>
                <div className='container-lg'>
                    <h2 className='section-header-second text-start'>QCare is dedicated</h2>
                    <h2 className='section-header-main text-start'>To Your Wellbeing</h2>
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
                                    <img className='about-icon-img' src='assets/img/covid-testing-img.png' />
                                    <div className='about-icon-text'>COVID-19 Testing</div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <img className='about-icon-img' src='assets/img/trauma-care-img.png' />
                                    <div className='about-icon-text'>Trauma Care</div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <img className='about-icon-img' src='assets/img/womens-health-img.png' />
                                    <div className='about-icon-text'>Women's Health</div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <img className='about-icon-img' src='assets/img/pediatric-care-img.png' />
                                    <div className='about-icon-text'>Pediatric Care</div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <img className='about-icon-img' src='assets/img/xray-img.png' />
                                    <div className='about-icon-text'>X-Ray</div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <img className='about-icon-img' src='assets/img/allergies-img.png' />
                                    <div className='about-icon-text'>Alleries & Asthma</div>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <img className='about-icon-img' src='assets/img/vaccination-img.png' />
                                    <div className='about-icon-text'>Vaccinations</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 text-center'>
                            <img className='about-img' src='assets/img/lab-services-img.jpg' />
                            <a href='/services' className='btn btn-view-services'>
                                See all of our treatment options here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='locations-container d-flex justify-content-center'>
                <a className="btn btn-lite" href="/locations" role="button">Find a Location Near You!</a>
            </div>
            <div className='insurance-container container-lg'>
                <div className='row'>
                    <div className='col-lg-4 d-flex flex-column justify-content-center'>
                        <div className='insurance-title'>
                            <h3 className='insurance-header'>
                                We accept most insurance companies.<hr style={{width: '3rem', border: '1px solid black', opacity: '1'}}></hr>
                            </h3>
                            <a className="insurance-link" href='/insurance'>Click Here for a complete list of insurances.</a>
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
                <h2 className='section-header-main fst-italic'>"On the Road to Healthy Living"</h2>
                <img className='van-img' src='assets/img/QCare_vanDesign_preview9d.jpg' alt='vans' />
            </div>
            <div className='faq-container'>
                <div className='faq-img-bg'></div>
                <div className='faq-content container-lg'>
                    <h2 className='section-header-white'>FAQ</h2>
                    <p className='faq-text'>
                        There’s no reason to spend hours wondering what or how a certain procedure works, 
                        when a dedicated team of doctors and medical professionals QCare have created 
                        extensive Q&A Resources.
                    </p>
                    <a className="btn btn-faq" href="/faq" role="button">Check It Out</a>
                </div>
            </div>
            <div className='health-lib-container d-flex flex-column justify-content-center'>
                <h2 className='section-header-second text-start'>we help you care for</h2>
                <h2 className='section-header-main text-start'>Yourself and Your Family</h2>
                <p className='health-text'>
                    Check out these wellness tips and the research that backs them up to better understand 
                    how to optimize your health and nutrition.
                </p>
                <div className='row gx-4 mx-auto'>
                    <div className='col-lg-4'>
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
                    <div className='col-lg-4'>
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
                    <div className='col-lg-4'>
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