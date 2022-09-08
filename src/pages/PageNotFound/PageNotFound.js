import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='container-lg text-center pt-3 pb-5 mb-4'>
            <h1 className='title-404'>404</h1>
            <img src='assets/img/404/hanginthere-landscape.jpg' className='undertale-img' />
            <h2>Uh oh! You found a page that doesn't exist!</h2>
            <h4 className='message-404'>Don't panic. Return to the Home Page to resume your journey towards a healthy life.</h4>
            <a href='/' className='btn btn-return'>Return to Home</a>
        </div>
    )
}

export default PageNotFound