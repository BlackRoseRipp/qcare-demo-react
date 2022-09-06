import React from 'react';
import './NavBar.css';
import NavButton from './NavButton';
import { routes } from './routes';

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className='navbar'>
                <div className='container-lg justify-content-center'>
                    <div className='nav'>
                        <div className='card fixed-top brand-card'>
                            <a className='brand container-sm' href='/'>
                                <img src='assets/img/QCare-LogoB.png' alt='QCare Logo' style={{width: '100%'}} />
                            </a>
                        </div>
                        <NavButton 
                            dropdownLinks={[
                                {
                                    to: '#',
                                    primary: 'Team'
                                },
                                {
                                    to: '#',
                                    primary: 'Health Library'
                                }
                            ]}
                            primary='About Us'
                        />
                        <NavButton 
                            dropdownLinks={[
                                {
                                    to: '#',
                                    primary: 'Insurance'
                                },
                                {
                                    to: '#',
                                    primary: 'Schedule'
                                },
                                {
                                    to: '#',
                                    primary: 'Virtual Visit'
                                },
                                {
                                    to: '#',
                                    primary: 'Portal'
                                }
                            ]}
                            primary='Services'
                        />
                        <NavButton
                            to='#'
                            primary='Locations'
                        />
                    </div>
                    <a className='btn btn-contact ms-auto' href='#'>Contact Us</a>
                </div>
            </nav>
            <div className='page-container'>
                {routes()}
            </div>
        </React.Fragment>
    )
}

export default NavBar