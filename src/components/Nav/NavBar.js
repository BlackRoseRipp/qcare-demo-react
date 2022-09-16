import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationPin } from "react-icons/md"
import ListLink from './ListLink'
import "./NavBar.css"
import NavButton from './NavButton'
import { routes } from "./routes"


//TODO: fix pathing for ListItemLink's
const NavBar = () => {


    return (
        <React.Fragment>
            <nav className="navbar nav-top">
                <div className='container-lg'>                    
                    <div className='nav nav-top-right'>
                        <BsFillTelephoneFill style={{ padding: '0em .25em', fontSize: '2em'}} />
                        <span>+1 877-722-7318</span>
                        <div className='vr'></div>
                        <AiOutlineMail style={{ fontSize: '1.25em', fontWeight: '600', marginRight: '.5rem'}}/>
                        <span>clientservices@qcare.com</span>
                        <div className='vr'></div>
                        <MdLocationPin style={{ fontSize: '1.25em', marginRight: '.5rem'}}/>
                        <span>143 W 72nd St, Manhattan, NY 10023, United States</span>
                    </div>
                </div>
            </nav>
            <nav className='navbar nav-bottom'>
                <div className='navigation-container'>
                    <a className='navbar-brand' href='/'>
                        <img src="assets/img/QCare-LogoB.png" style={{ width: '100%' }} />
                    </a>
                    <div className='d-flex align-items-center justify-content-center full-screen'>
                        <NavButton 
                            primary='Home'
                            to='/'
                        />
                        <NavButton
                            primary="About Us"
                            to='/about'
                            dropdownLinks={[
                                {
                                    to: '/team',
                                    primary: 'Meet the team'
                                },
                                {
                                    to: '/careers',
                                    primary: 'Careers'
                                },
                                {
                                    to: '/blog',
                                    primary: 'Blog'
                                },
                                {
                                    to: "/contact",
                                    primary: "Contact Us"
                                }
                            ]}
                        />
                        <NavButton
                            primary="Services & Care"
                            to='/nyc-urgent-care-services'
                            dropdownLinks={[
                                {
                                    to: '/prevention',
                                    primary: 'Wellness Visits'
                                },
                                {
                                    to: '/pediatrics',
                                    primary: 'Pediatric Care'
                                },
                                {
                                    primary: 'Urgent Care',
                                    dropdownLinks: [
                                        {
                                            to: '/cold-flu',
                                            primary: 'Cold & Flu'
                                        },
                                        {
                                            to: '/cuts-&-scrapes',
                                            primary: 'Cuts & Scrapes'
                                        },
                                        {
                                            to: '/respiratory',
                                            primary: 'Respiratory Illnesses'
                                        },
                                        {
                                            to: '/sinus-infection',
                                            primary: 'Sinus Infection'
                                        },
                                        {
                                            to: '/skin-ailments',
                                            primary: 'Skin Ailments'
                                        },
                                        {
                                            to: '/stomach-ailments',
                                            primary: 'Stomach Ailments'
                                        },
                                        {
                                            to: '/strep-throat',
                                            primary: 'Strep Throat'
                                        },
                                        {
                                            to: '/uti',
                                            primary: 'UTI'
                                        },
                                        {
                                            to: '/xrays',
                                            primary: 'X-Rays'
                                        }
                                    ]
                                },
                                {
                                    to: '/allergies-&-asthma',
                                    primary: 'Allergies & Asthma'
                                },
                                {
                                    to: '/covid-19',
                                    primary: 'COVID-19'
                                },
                                {
                                    to: '/vaccines',
                                    primary: 'Vaccinations'
                                }
                            ]}
                        />
                        <NavButton
                            primary='Plan Your Visit'
                            to='/plan-your-visit'
                            dropdownLinks={[
                                {
                                    to: '/home-visits',
                                    primary: 'Home Visits'
                                },
                                {
                                    to: '/mobile-stations',
                                    primary: 'Mobile Stations'
                                },
                                {
                                    to: '/locations',
                                    primary: 'Clinic Locations'
                                },
                                {
                                    to: '/insurance',
                                    primary: 'Insurances'
                                },
                                {
                                    to: '/billing',
                                    primary: 'Billing Info'
                                },
                                {
                                    to: '/what-to-bring',
                                    primary: 'What To Bring'
                                }
                            ]}
                        />
                    </div>
                    <a className="btn btn-patient" href="#">
                        Patient Portal
                    </a>
                    <a className='btn btn-testing full-screen' href='/appointment'>
                        Book an Appointment
                    </a>
                    <button 
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <nav className='navbar navbar-expand-lg nav-mobile w-100'>
                    <div className='collapse navbar-collapse w-100' id='navbarSupportedContent'>
                        <ul className='navbar-nav'>
                            <li className='nav-item text-center'>
                                <ListLink 
                                    primary="Home"
                                    to='/'
                                />
                            </li>
                            <li className='nav-item text-center'>
                                <ListLink 
                                    primary="About Us"
                                    to='/about'
                                />
                            </li>
                            <li className='nav-item text-center'>
                                <ListLink 
                                    primary="Services & Care"
                                    to='/services'
                                />
                            </li>
                            <li className='nav-item text-center'>
                                <ListLink 
                                    primary="Plan Your Visit"
                                    to='/plan-your-visit'
                                />
                            </li>
                        </ul>
                    </div>
                </nav>
            </nav>
            <div>
                {routes()}
            </div>
        </React.Fragment>
    )
}

export default NavBar