import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-clean">
            <div className='main-footer'>
                <div className='container-lg main-footer-container m-4'>
                    <div className='row'>
                        <div className='col-lg-4 text-center'>
                            <a href="/" style={{ width: '10%'}}>
                                <img src="assets/img/QCare-LogoB.png" style={{ width: '80%' }} />
                            </a>
                            <div className='row w-75 mx-auto mt-3'>
                                <div className='col-3'>
                                    <a className='logo-link' href="#">
                                        <FaInstagram />
                                    </a>
                                </div>
                                <div className='col-3'>
                                    <a className='logo-link' href="#">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className='col-3'>
                                    <a className='logo-link' href="#">
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className='col-3'>
                                    <a className='logo-link'href="#">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 footer-contact'>
                            <div className='ms-5 mt-4'>
                                <h5 style={{ fontSize: "1.5em", fontWeight: 'bold' }}>
                                    Contact Info
                                </h5>
                                <ul style={{ listStyleType: "none", width: "80%"}}>
                                    <li style={{ padding: '.4em 0' }}>
                                        <a className="contact-link" href="tel:888-522-7247">
                                            +1 888-522-7247
                                        </a>
                                    </li>
                                    <li style={{ padding: '.4em 0' }}>
                                        <a className="contact-link" href="mailto:urgent@qcare.com">
                                            urgent@qcare.com
                                        </a>
                                    </li>
                                    <li style={{ padding: '.4em 0' }}>
                                        <a className="contact-link" href="https://www.google.com/maps/place/166+N+7th+St,+Brooklyn,+NY+11211/data=!4m2!3m1!1s0x89c2595dc4a1e02b:0x46a2a427dc7dd2f5?sa=X&ved=2ahUKEwjf3Mu7s4X6AhWHD1kFHaYOAMoQ8gF6BAgXEAE">
                                            166 N 7th St<br></br>Brooklyn, NY 11211
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{
                            justifyContent: "center"
                        }}>
                            <div className='container d-grid gap-2' style={{ alignItems: 'center' }}>
                                <a className='btn btn-footer' href='/contact'>
                                    Contact Us
                                </a>
                                <a className='btn btn-footer' href='/appointment'>
                                    Appointment
                                </a>
                                <a className='btn btn-footer' href='#'>
                                    Patient Portal
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer