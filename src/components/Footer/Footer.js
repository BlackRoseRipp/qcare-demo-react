import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-clean">
            <div className='main-footer'>
                <div className='container-lg main-footer-container m-4'>
                    <div className='row' id='mainRow'>
                        <div className='col-lg-4 text-center'>
                            <a href="/" style={{ width: '10%'}}>
                                <img src="assets/img/QCare-LogoB.png" style={{ width: '80%' }} />
                            </a>
                            <div className='row w-100 mx-auto mt-3'>
                                <div className='col-4 px-0'>
                                    <a className='footer-link' href="/about">
                                        About Us
                                    </a>
                                </div>
                                <div className='col-4'>
                                    <a className='footer-link' href="/nyc-urgent-care-services">
                                        Services
                                    </a>
                                </div>
                                <div className='col-4 px-0'>
                                    <a className='footer-link' href="/plan-your-visit">
                                        Plan Your Visit
                                    </a>
                                </div>
                            </div>
                            <div className='row w-75 mx-auto mt-3 visually-hidden'>
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
                                        <a className="contact-link" href="tel:877-722-7318">
                                            +1 877-722-7318
                                        </a>
                                    </li>
                                    <li style={{ padding: '.4em 0' }}>
                                        <a className="contact-link" href="mailto:clientservices@qcare.com">
                                            clientservices@qcare.com
                                        </a>
                                    </li>
                                    <li style={{ padding: '.4em 0' }}>
                                        <a className="contact-link" href="https://www.google.com/maps/place/143+W+72nd+St,+New+York,+NY+10023/@40.7782211,-73.9824139,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2588a351f00ed:0xa7f97add245c9e79!8m2!3d40.7782211!4d-73.9802252!16s%2Fg%2F11bw3_tfp3?hl=en">
                                            143 W 72nd St<br></br>Manhattan, NY 10023
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
            <div className="bottom-footer">
                <div className='container-lg d-flex justify-content-center'>
                    <div className='hstack mx-auto'>
                        <a href='/privacy' className='bottom-footer-text'>
                            Privacy Statement
                        </a>
                        <div className='vr'></div>
                        <a href='/legal-policy' className='bottom-footer-text'>
                            Legal Policy
                        </a>
                        <div className='vr'></div>
                        <a href='/patients-rights' className='bottom-footer-text'>
                            Patient's Rights
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer