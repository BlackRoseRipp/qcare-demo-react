import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='container-lg text-center'>
            <img src='assets/img/404/hanginthere-landscape.jpg' className='undertale-img' />
            <h1 className='title-404'>This page does not exist yet!</h1>
            <h4 className='message-404'>It's almost done though so just wait a little longer!</h4>
        </div>
    )
}

export default PageNotFound