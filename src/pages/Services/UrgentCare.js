import React from 'react'
import { FaDizzy, FaHeadSideCough, FaLungs } from 'react-icons/fa'
import { GiBrokenBone } from 'react-icons/gi'
import { IoIosBeaker } from 'react-icons/io'
import { IoBandageSharp, IoMedicalSharp } from 'react-icons/io5'
import { MdHealing, MdSick } from 'react-icons/md'
import { RiSurgicalMaskFill } from 'react-icons/ri'
import { TbActivityHeartbeat } from 'react-icons/tb'
import InsuranceSlider from '../../components/InsuranceSlider/InsuranceSlider'
import Data from '../../components/Locations/Data'
import StoreLocator from '../../components/Locations/StoreLocator'
import './UrgentCare.css'

const UrgentCare = () => {
    return (
        <div>
            <div className="urgent-hero-container">
                <div className="container-lg my-auto">
                    <div className="hero-body text-center">
                        <h1 className="hero-header">Urgent Care</h1>
                        <a className='btn btn-blue' href='/locations'>Find a location near you</a>
                    </div>
                </div>
            </div>
            <div className='white-container'>
                <div className='container mb-5'>
                    <h2 className='blue-header text-lg-end text-center'>What is urgent care?</h2>
                </div>
                <div className='row w-100 mx-0'>
                    <div className='col-lg-6 d-flex align-items-center fullscreen'>
                        <div className='w-50 mx-auto blue-container rounded-corners py-0'>
                            <img className='left-blue-img' src='assets/img/pexels-evg-kowalievska-1170979.jpg' />
                        </div>
                    </div>
                    <div className='col-lg-6 rounded-card-right blue-container d-flex align-items-center'>
                        <p className='hero-text'>
                            Urgent care is a non-emergency service that helps you get seen by a doctor quickly. You can 
                            walk into our clinic without an appointment for minor illnesses or injuries that need to be 
                            treated right away.  
                            <br></br><br></br>
                            Urgent Care is your best option when you can’t get in to visit your family doctor but are not 
                            sick enough to visit the Emergency Room.
                        </p>
                    </div>
                </div>
            </div>
            <div className='blue-container'>
                <div className='container'>
                    <h2 className='white-header text-center'>Why you should be seen at urgent care</h2>
                    <p className='hero-text text-center mt-4'>
                        At Qcare, we see people who need immediate medical attention. Our team of healthcare providers will 
                        treat minor illnesses and injuries like:
                    </p>
                    <div className='carousel slide' id='pediatricSlide'>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#pediatricSlide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#pediatricSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className='carousel-inner justify-content-center mx-auto'>
                            <div className='carousel-item active'>
                                <div className='hstack gap-3 d-flex align-items-start w-75 mx-auto'>
                                    <div className='slide-item'>
                                        <IoBandageSharp className='slide-icon' />
                                        <div className='slide-text ps-0'>Cuts, wounds or rashes</div>
                                    </div>
                                    <div className='slide-item'>
                                        <RiSurgicalMaskFill className='slide-icon' />
                                        <div className='slide-text ps-0'>Flu and cold symptoms</div>
                                    </div>
                                    <div className='slide-item'>
                                        <FaHeadSideCough className='slide-icon' />
                                        <div className='slide-text ps-0'>Sinus infections</div>
                                    </div>
                                    <div className='slide-item'>
                                        <FaLungs className='slide-icon' />
                                        <div className='slide-text ps-0'>Allergies & Asthma</div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='hstack gap-3 d-flex align-items-start w-75 mx-auto'>
                                    <div className='slide-item'>
                                        <FaDizzy className='slide-icon' />
                                        <div className='slide-text ps-0'>Headaches</div>
                                    </div>
                                    <div className='slide-item'>
                                        <MdSick className='slide-icon' />
                                        <div className='slide-text ps-0'>Nausea, vomiting, & diarrhea</div>
                                    </div>
                                    <div className='slide-item'>
                                        <IoIosBeaker className='slide-icon' />
                                        <div className='slide-text ps-0'>Urinary tract infections</div>
                                    </div>
                                    <div className='slide-item'>
                                        <GiBrokenBone className='slide-icon' />
                                        <div className='slide-text ps-0'>Broken bones or sprains</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#pediatricSlide" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#pediatricSlide" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='rounded-corners emergency-alert'>
                        <p className='blue-text text-center'>
                            The team at Qcare makes every effort to get you healthy faster so you can avoid going to the 
                            hospital. <strong>If you’re having a life-threatening emergency, call 911</strong>.
                        </p>
                        <div className='d-flex justify-content-center'>
                            <p className='blue-text text-center'>
                                You should be seen in the Emergency Room if you’re experiencing any of these symptoms:
                            </p>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: 'fit-content'}}>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><TbActivityHeartbeat className='list-icon'/>&nbsp; Chest pain</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><TbActivityHeartbeat className='list-icon'/>&nbsp; Difficulty breathing</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><TbActivityHeartbeat className='list-icon'/>&nbsp; Uncontrolled bleeding</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><TbActivityHeartbeat className='list-icon'/>&nbsp; Medication overdose</h4>
                                </div>
                                <div className='icon-list-item'>
                                    <h4 className='icon-list-text blue-text'><TbActivityHeartbeat className='list-icon'/>&nbsp; A serious head injury</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='white-container'>
                <div className='container text-center'>
                    <h2 className='red-header mb-5'>What to expect at during an urgent care visit at Qcare</h2>
                    <p className='red-text'>
                        At Qcare, your health concerns are our concerns too. We use state-of-the-art technology to ensure 
                        you will be seen, heard and treated in a timely manner.
                        <br></br><br></br>
                        On our website, you can submit your health information, history and any medications you’re taking. 
                        This reduces your wait time and on site paperwork. We also have kiosks at our locations around New 
                        York City where you can register.
                    </p>
                </div>
                <div className='row w-100 mx-0 mt-5'>
                    <div className='col-lg-6 d-flex flex-column justify-content-center rounded-card-left red-container'>
                        <p className='hero-text'>
                            After speaking to a provider, we may need to run a few tests. Having on-site testing allows you 
                            to get care faster. At Qcare, we can do:
                        </p>
                        <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: '80%'}}>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><MdHealing className='list-icon'/>&nbsp; X-Rays</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><MdHealing className='list-icon'/>&nbsp; Rapid strep</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><MdHealing className='list-icon'/>&nbsp; COVID-19 swabbing</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><MdHealing className='list-icon'/>&nbsp; Pregnancy tests</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><MdHealing className='list-icon'/>&nbsp; Sexually transmitted illness testing</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><MdHealing className='list-icon'/>&nbsp; And more</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center fullscreen'>
                        <div className='w-50 mx-auto red-container rounded-corners py-0'>
                            <img className='right-red-img' src='assets/img/pexels-edward-jenner-4031321.jpg' />
                        </div>
                    </div>
                </div>
                <div className='row w-100 mx-0 mt-5'>
                    <div className='col-lg-6 d-flex align-items-center fullscreen'>
                        <div className='w-50 mx-auto red-container rounded-corners py-0'>
                            <img className='left-red-img' src='assets/img/pexels-yan-krukov-5794058.jpg' />
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-center rounded-card-right red-container'>
                        <p className='hero-text'>
                            Your treatment plan depends on your illness or injury. Our providers will create a customized 
                            plan so you can go home feeling better. Our Qcare providers are qualified to:
                        </p>
                        <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: '80%'}}>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><IoMedicalSharp className='list-icon'/>&nbsp; Do stitches</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><IoMedicalSharp className='list-icon'/>&nbsp; Treat minor burns</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><IoMedicalSharp className='list-icon'/>&nbsp; Prescribe medications</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><IoMedicalSharp className='list-icon'/>&nbsp; Order bloodwork</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><IoMedicalSharp className='list-icon'/>&nbsp; Recommend follow-up visits</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container text-center mt-5 visually-hidden'>
                    <h3 className='red-header'>
                        If you’re experiencing a non-life-threatening illness or injury, visit Qcare to get better faster.
                    </h3>
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

export default UrgentCare