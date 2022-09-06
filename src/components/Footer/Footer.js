import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-clean">
            <div className='main-footer'>
                <div className='container-lg main-footer-container'>
                    <div>
                        <a href="/" style={{ width: '15%', marginRight: '3em' }}>
                            <img src="assets/img/QCare-LogoB.png" style={{ width: '240px' }} />
                        </a>
                    </div>
                    <div className='row' style={{
                        width:"90%",
                        padding: "2em 0em"
                    }}>
                        <div className='col-lg-4'>
                            <h5 style={{ fontSize: "1.5em", fontWeight: 'bold' }}>
                                Services
                            </h5>
                            <ul style={{ listStyleType: "none", width: "80%"}}>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#000", textDecorationLine: 'none' }}>Urgent Care</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#000", textDecorationLine: 'none' }}>COVID-19 Testing</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#000", textDecorationLine: 'none' }}>Physical Exams</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#000", textDecorationLine: 'none' }}>X-Rays</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#000", textDecorationLine: 'none' }}>Pediatric</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-4'>
                            <h5 style={{ fontSize: "1.5em", fontWeight: 'bold' }}>
                                About Us
                            </h5>
                            {/* TODO: Fix styling pls */}
                            <ul style={{ listStyleType: "none", width: "80%"}}>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#000", textDecorationLine: 'none' }}>Insurance</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#000", textDecorationLine: 'none' }}>Locations</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#000", textDecorationLine: 'none' }}>Testimonials</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4" style={{
                            justifyContent: "center"
                        }}>
                            <div className='container d-grid gap-2' style={{ alignItems: 'center' }}>
                                <button className='btn btn-footer'>
                                    COVID-19 Test
                                </button>
                                <button className='btn btn-footer'>
                                    Appointment
                                </button>
                                <button className='btn btn-footer'>
                                    Patient Portal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer