import React from 'react';
import { FaDisease, FaHandHoldingMedical, FaLungs } from 'react-icons/fa';
import InsuranceSlider from '../../components/InsuranceSlider/InsuranceSlider';
import Data from '../../components/Locations/Data';
import StoreLocator from '../../components/Locations/StoreLocator';
import './Allergies.css';

const Allergies = () => {
    return (
        <div>
            <div className="allergies-hero-container">
                <div className="container my-auto">
                    <div className="hero-body text-center">
                        <h6 className="hero-header">Allergies and Asthma Preventative & Urgent Care</h6>
                        <p className="hero-text">
                            Visit QCare mobile care units thorughout New York City for all your asthma 
                            and allergy care needs.
                        </p>
                        <a className="btn btn-hero" href="/appointment" role="button">Schedule an Appointment</a>
                    </div>
                </div>
            </div>
            <div className='white-container' style={{padding: '7rem 0'}}>
                <div className='row container mx-auto'>
                    <div className='col-lg-4 blue-container rounded-corners py-0 fullscreen'>
                        <img className='left-blue-img' src='assets/img/pexels-gustavo-fring-7447010.jpg' />
                    </div>
                    <div className='col-lg-8 text-center d-flex align-items-center'>
                        <h3 className='blue-text w-75 mx-auto'>
                            By scheduling an allergies or asthma visit at Qcare, we help you stay on 
                            top of your asthma or allergies care and avoid flare ups. 
                            <br></br><br></br>
                            Our doctors, physician assistants and nurse practitioners have extensive 
                            education and experience in asthma and allergies care. They’ll help you 
                            determine the right course of treatment to help you feel your best.
                        </h3>
                    </div>
                </div>
            </div>
            <div className='blue-container'>
                <div className='container'>
                    <h2 className='white-header text-center'>What is allergy and asthma care?</h2>
                    <p className='hero-text text-center'>
                        When you suffer from allergies and asthma, it may feel like your body is 
                        constantly in defense mode. Your body sees particles from the environment, 
                        known as allergens, as a threat.
                    </p>
                    <nav className='mt-5'>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-allergy-tab" data-bs-toggle="tab" data-bs-target="#nav-allergy" type="button" role="tab" aria-controls="nav-allergy" aria-selected="true">Allergies</button>
                            <button class="nav-link" id="nav-asthma-tab" data-bs-toggle="tab" data-bs-target="#nav-asthma" type="button" role="tab" aria-controls="nav-asthma" aria-selected="false">Asthma</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-allergy" role="tabpanel" aria-labelledby="nav-allergy-tab" tabindex="0">
                            <p className='blue-text p-text text-center fw-semibold'>
                                Having allergies causes your immune system to react with uncomfortable symptoms like:
                            </p>
                            <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: 'fit-content'}}>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaDisease className='list-icon'/>&nbsp; Sneezing</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaDisease className='list-icon'/>&nbsp; Coughing</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaDisease className='list-icon'/>&nbsp; Itchy throat</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaDisease className='list-icon'/>&nbsp; Puffy, red, or watery eyes</h4>
                                </div>
                            </div>
                            <p className='p-text blue-text text-center fw-semibold w-75 mx-auto'>
                                You can be allergic to food, pets or particles in the environment. You may be able to 
                                manage seasonal allergies with over-the-counter or prescription medications. Those 
                                with severe allergies may need to carry an Epi-Pen in case of an emergency.
                            </p>
                        </div>
                        <div class="tab-pane fade" id="nav-asthma" role="tabpanel" aria-labelledby="nav-asthma-tab" tabindex="0">
                            <p className='blue-text p-text text-center fw-semibold w-75 mx-auto'>
                                Asthma is a disease characterized by hypersensitivity that causes breathing problems. 
                                During an asthma attack, you may have difficulty moving air in and out of your lungs. 
                                An asthma attack can cause symptoms like:
                            </p>
                            <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: 'fit-content'}}>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaLungs className='list-icon'/>&nbsp; Wheezing</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaLungs className='list-icon'/>&nbsp; Difficulty breathing</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaLungs className='list-icon'/>&nbsp; Chest tightness</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><FaLungs className='list-icon'/>&nbsp; Excessive coughing</h4>
                                </div>
                            </div>
                            <p className='p-text blue-text w-75 mx-auto fw-semibold text-center'>
                                Among children, asthma is the most common childhood chronic illness, affecting nearly 
                                five million children in the United States.
                                <br></br><br></br>
                                If you have asthma, you may need to take medication or use an inhaler every day to 
                                prevent an asthma attack. If you have an asthma attack, you may need a rescue treatment 
                                that relaxes your airway so air can move through your lungs. 
                            </p>
                        </div>
                    </div>
                    <p className='hero-text text-center mt-5'>
                        Many of the same threats that cause an allergic reaction may also cause an asthma 
                        attack. However, not all asthma flare-ups are allergic attacks.
                        <br></br><br></br>
                        Because allergies and asthma go hand-in-hand, we treat patients at Urgent Care for 
                        both at the same appointment. Keep reading to find out how an Allergies and Asthma 
                        appointment will benefit you. 
                    </p>
                </div>
            </div>
            <div className='white-container'>
                <h2 className='red-header text-center'>Why you need allergy and asthma care</h2>
                <div className='row w-100 mx-0'>
                    <div className='col-lg-6 red-container rounded-card-left d-flex align-items-cente'>
                        <p className='hero-text'>
                            You can develop asthma as a child or adult. As you age, your allergy and asthma 
                            needs may change. At Qcare, your provider can help you create a treatment regimen 
                            that works for your needs. 
                            <br></br><br></br>
                            You should make an allergy and asthma appointment if your symptoms are interfering 
                            with your daily life or if it’s time for a change to your treatment plan. 
                            <br></br><br></br>
                            If you’re experiencing shortness of breath or difficulty breathing, call 911.
                        </p>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center fullscreen'>
                        <div className='w-50 mx-auto red-container rounded-corners py-0'>
                            <img className='right-red-img' src='assets/img/pexels-karolina-grabowska-7195083.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <div className='container'>
                    <h2 className='red-header'>What to expect at a visit for allergies or asthma</h2>
                </div>
                <div className='row w-100 mx-0'>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <p className='red-text p-text fw-semibold text-lg-start text-center w-75 mx-auto'>
                            You can visit Qcare for an allergy and asthma appointment at our walk-in mobile care 
                            units. You can also schedule an appointment on our website at a time that’s 
                            convenient for you. 
                            <br></br><br></br>
                            At your visit, tell us what you’re experiencing and how long you’ve had problems 
                            with allergies or asthma. 
                            <br></br><br></br>
                            Be sure to share details like your medications, symptoms and whether you carry an 
                            Epi-pen. 
                            <br></br><br></br>
                            Your provider will help you identify your triggers so you can prevent an allergy 
                            or asthma attack in the future. 
                        </p>
                    </div>
                    <div className='col-lg-6 red-container rounded-card-right d-flex flex-column justify-content-center'>
                        <p className='hero-text text-lg-start text-center'>
                            There are many asthma triggers you can’t change, like pollen or cold weather. 
                            Your provider will make sure you have the right medication on hand in the event 
                            of an asthma attack.
                            <br></br><br></br>
                            Our providers may prescribe:
                        </p>
                        <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: 'fit-content'}}>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text w-auto'><FaHandHoldingMedical className='list-icon'/>&nbsp; Daily allergy pills</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text w-auto'><FaHandHoldingMedical className='list-icon'/>&nbsp; Asthma inhalers</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text w-auto'><FaHandHoldingMedical className='list-icon'/>&nbsp; Nebulizer treatments</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text w-auto'><FaHandHoldingMedical className='list-icon'/>&nbsp; Epi-pens</h4>
                            </div>
                        </div>
                        <p className='hero-text text-center mt-5'>
                            You’ll leave Qcare feeling confident about how to manage your allergies and asthma.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grey-container text-center">
                <h2 className='blue-header mb-5 text-center' style={{fontSize: '2.5rem'}}>Meeting New York patients wherever you are!</h2>
                <div className='map-container'>
                    <StoreLocator 
                        locations={Data()} 
                        src='https://www.google.com/maps/d/u/1/embed?mid=1xwRDy-mAHVhayzNjSXDYxrHLbUckrFM&ehbc=2E312F'
                        buttonStyle='blue'/>
                </div>
                <div className='mx-auto text-center'>
                    <a className="btn btn-lite-blue mt-5" href="/locations" role="button">See all of our NYC locations</a>
                </div>
            </div>
            <div className='white-container-3'>
                <h2 className="blue-header text-center" style={{marginTop: '0', fontSize: '3rem'}}>We Accept These Insurances</h2>
                <InsuranceSlider />
            </div>
        </div>
    )
}

export default Allergies