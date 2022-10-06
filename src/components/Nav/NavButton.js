import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import ListLink from './ListLink';
import './NavButton.css';

function NavButton(props) {
    const { icon, dropdownLinks, primary, to, style } = props

    const location = useLocation()
    const path = location.pathname
    
    const overStyle = style

    const activeDropdownLink = dropdownLinks.some(link => link.to === path)

    return (dropdownLinks ? (
        <div className='dropdown'>
            <a 
                className={'btn btn-nav-dropdown dropdown-toggle'+ (path === to || activeDropdownLink ? ' active' : '')}
                type='button'
                data-bs-toggle=''
                aria-expanded='false'
                href={to}
                style={style ? overStyle : {}}
            >
                {icon}&nbsp;{primary}<span className='ms-3'><MdKeyboardArrowDown /></span>
            </a>
            <ul className='dropdown-menu parent-menu'>
                {dropdownLinks.map(link => {
                    return (
                        <li><ListLink to={link.to} primary={link.primary} icon={link.icon} dropdownLinks={link.dropdownLinks}/></li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="dropdown">
            <a className={'nav-link list-btn'+ (path === to ? ' active' : '')} aria-current='page' href={to}>
                {icon ? (
                    <span className='nav-icon' style={{ color: '#02063D', minWidth: 36 }}>
                        {icon}
                    </span>
                ) : null}
                {primary}
            </a>
        </div>
    ))
}

export default NavButton