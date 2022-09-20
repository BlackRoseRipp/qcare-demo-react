import React from 'react';
import { FaFileMedical, FaHeartbeat, FaPrescriptionBottleAlt, FaStethoscope, FaSyringe } from 'react-icons/fa';
import { GiBrain, GiSyringe } from 'react-icons/gi';
import { IoScaleSharp } from 'react-icons/io5';
import { RiVirusFill } from 'react-icons/ri';
import './Wellness.css';

const Wellness = () => {
    return (
        <div>
            <div className="hero-container">
                <div className="container-lg">
                    <div className="hero-body text-center">
                        <h1 className="hero-header">Wellness Visits</h1>
                        <h6 className="hero-text">
                            Visit Qcare for comfortable, fast and easy preventative care 
                            medical visits
                        </h6>
                        <a className='btn btn-blue' href='/appointment'>Schedule an Appointment</a>
                    </div>
                </div>
            </div>
            <div className='white-container'>
                <div className='container'>
                    <h2 className='blue-header'>What is a wellness visit?</h2>
                </div>
                <div className='row w-100 mt-5 mx-0'>
                    <div className='col-lg-5 wellness-card-left blue-container d-flex align-items-center'>
                        <p className='hero-text'>
                            You don’t have to be sick to go to the doctor. If you’re generally healthy 
                            but want to review your health with a professional, consider scheduling a 
                            wellness visit with Qcare, located at mobile locations and with full clinics 
                            throughout New York City.
                            <br></br><br></br>
                            A yearly wellness visit is a chance to stay ahead of illnesses. You and your 
                            doctor will work together to evaluate your current health status and risk 
                            factors for getting sick.
                        </p>
                    </div>
                    <div className='col-lg-7'>
                        <div id='colShortened'>
                            <p className='blue-text'>
                                Our doctors, physician assistants and nurse practitioners are trained to 
                                screen for common diseases. At Qcare, your provider may catch your risk for 
                                developing illnesses like:
                            </p>
                            <div className='d-flex flex-column justify-content-center'>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaFileMedical className='list-icon'/>&nbsp; Health history</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaPrescriptionBottleAlt className='list-icon'/>&nbsp; Medications</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><GiSyringe className='list-icon'/>&nbsp; Immunizations</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaStethoscope className='list-icon'/>&nbsp; Blood pressure</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><IoScaleSharp className='list-icon'/>&nbsp; Weight</h4>
                                </div>
                            </div>
                            <p className='blue-text'>
                                An annual well visit is ideal for people of every age, from infants to seniors. 
                                Your provider may recommend more frequent checkups, depending on your health 
                                factors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom: '5rem'}}>
                <div className='container'>
                    <h2 className='red-header text-end'>Why should you schedule a wellness visit?</h2>
                </div>
                <div className='row w-100 mt-5 mx-0'>
                    <div className='col-lg-5 order-1 order-lg-5 wellness-card-right red-container d-flex align-items-center'>
                        <p className='hero-text'>
                            By scheduling a wellness visit at Qcare, we help you practice preventative 
                            care. It’s an actionable way to stay on top of your health so you are less 
                            likely to get sick.
                            <br></br><br></br>
                            Your provider will identify whether you’re at risk for developing health 
                            problems based on your health status, lifestyle and family history.
                        </p>
                    </div>
                    <div className='col-lg-7 order-5 order-lg-1 container'>
                        <div id='colShortened'>
                            <p className='red-text'>
                                Our doctors, physician assistants and nurse practitioners are trained 
                                to screen for common diseases. At Qcare, your provider may catch your 
                                risk for developing illnesses like:
                            </p>
                            <div className='d-flex flex-column justify-content-center'>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text red-text'><FaSyringe className='list-icon'/>&nbsp; Diabetes</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text red-text'><FaHeartbeat className='list-icon'/>&nbsp; Heart disease</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text red-text'><GiBrain className='list-icon'/>&nbsp; Stroke</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text red-text'><RiVirusFill className='list-icon'/>&nbsp; Cancer</h4>
                                </div>
                            </div>
                            <p className='red-text'>
                                An annual well visit is ideal for people of every age, from infants to seniors. 
                                Your provider may recommend more frequent checkups, depending on your health 
                                factors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container text-center' style={{paddingBottom: '5rem'}}>
                <h2 className='blue-header mb-5'>What to expect at a wellness visit</h2>
                <div className='blue-container' id='expectations'>
                    <p className='hero-text'>
                        At your wellness visit, a provider will review your diet and lifestyle. Together 
                        you’ll identify changes you can make to stay healthy in a way that works for you.
                        <br></br><br></br>
                        Providers may also suggest blood tests or immunizations based on your age. You 
                        can access fast and accurate lab testing for any blood work right at Qcare.
                        <br></br><br></br>
                        Most insurance companies cover one wellness visit per year. Be sure to take 
                        advantage of yours by scheduling a visit today. 
                    </p>
                </div>
                <a className='btn btn-blue' href='/appointment'>Schedule Your Next Visit</a>
            </div>
        </div>
    )
}

export default Wellness