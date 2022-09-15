import React from 'react';
import './Insurance.css';
import INSURANCE_DATA from './insurance.json';

const Insurance = () => {
    const insuranceList = INSURANCE_DATA

    return (
        <div className='insurance-container container'>
            <h1 className='insurance-header'>We Accept These Insurances</h1>
            <div className='insurance-box'>
                <div className='row'>
                    {insuranceList.map((insurance) => {
                        return (
                            <div className='col-lg-3 col-md-4 col-sm-6 d-flex flex-column justify-content-center'>
                                <img src={'assets/img/insurance/'+insurance.logo} className='insurance-img' />
                                <h5 className='insurance-text'>{insurance.name}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Insurance