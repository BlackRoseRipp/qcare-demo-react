import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationPin } from "react-icons/md"
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
                        <span>+1 888-522-7247</span>
                        <div className='vr'></div>
                        <AiOutlineMail style={{ fontSize: '1.25em', fontWeight: '600', marginRight: '.5rem'}}/>
                        <span>urgent@qcare.com</span>
                        <div className='vr'></div>
                        <MdLocationPin style={{ fontSize: '1.25em', marginRight: '.5rem'}}/>
                        <span>166 N 7th St, Brooklyn, NY 11211, United States</span>
                    </div>
                </div>
            </nav>
            <nav className='navbar nav-bottom'>
                <div className='container-lg'>
                    <a className='navbar-brand' href='/' style={{width: '13%'}}>
                        <img src="assets/img/QCare-LogoB.png" style={{ width: '100%' }} />
                    </a>
                    <div className='d-flex align-items-center justify-content-center'>
                        <NavButton 
                            primary='Home'
                            to='/'
                        />
                        <NavButton
                            to="#"
                            primary="Services"
                        />
                        <NavButton
                            primary='Our Locations'
                            to='#'
                        />
                        <NavButton
                            to="#"
                            primary="Patients Portal"
                        />
                        <NavButton
                            to="#"
                            primary="Contact"
                        />
                    </div>
                    <a className='btn btn-testing' href='#'>
                        Book an Appointment
                    </a>
                </div>
            </nav>
            <div>
                {routes()}
            </div>
        </React.Fragment>
    )
}

export default NavBar