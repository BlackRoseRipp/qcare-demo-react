import React from 'react';
import INSURANCE_DATA from '../../components/InsuranceSlider/insurance.json';
import './Insurance.css';

const Insurance = () => {
    const insuranceList = INSURANCE_DATA

    return (
        <div className='insurance-container container'>
            <h1 className='insurance-header'>We Accept These Insurances</h1>
            <div className='insurance-box'>
                <div className='row g-4'>
                    {insuranceList.map((insurance) => {
                        return (
                            <div className='col-lg-3 col-md-4 col-sm-6 d-flex flex-column justify-content-center' id='insuranceItem'>
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