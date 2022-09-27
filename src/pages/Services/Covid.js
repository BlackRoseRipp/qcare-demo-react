import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { FaSyringe } from 'react-icons/fa'
import { GiVial } from 'react-icons/gi'
import { IoWarning } from 'react-icons/io5'
import { MdCoronavirus } from 'react-icons/md'
import { RiSurgicalMaskFill } from 'react-icons/ri'
import { SiSpeedtest } from 'react-icons/si'
import InsuranceSlider from '../../components/InsuranceSlider/InsuranceSlider'
import Data from '../../components/Locations/Data'
import StoreLocator from '../../components/Locations/StoreLocator'
import './Covid.css'

const Covid = () => {
    return (
        <div>
            <div className="covid-hero-container">
                <div className="container-lg my-auto">
                    <div className="hero-body text-center">
                        <h1 className="hero-header">COVID-19 Testing & Care at QCare</h1>
                        <h4 className='hero-text'>
                            Visit Qcare mobile care stations throughout New York City for all 
                            your COVID-19 testing and care needs
                        </h4>
                        <a className='btn btn-blue' href='/appointment'>Schedule an Appointment</a>
                    </div>
                </div>
            </div>
            <div className='white-container container'>
                <h3 className='blue-text text-center'>Schedule an appointment with Qcare if you need COVID-19 testing or treatment in the New York City area.</h3>
                <p className='blue-text p-text text-center'>We offer the following services:</p>
                <div className='hstack mx-auto' style={{height: 'fit-content'}}>
                    <div className='covid-services'>
                        <div className='blue-icon'><SiSpeedtest /></div>
                        <h4 className='blue-text text-center'>COVID-19 Rapid Antigen Test</h4>
                    </div>
                    <div className='covid-services'>
                        <div className='blue-icon'><MdCoronavirus /></div>
                        <h4 className='blue-text text-center'>COVID-19 Antibody Testing (IgG/IgM)</h4>
                    </div>
                    <div className='covid-services'>
                        <div className='blue-icon'><GiVial /></div>
                        <h4 className='blue-text text-center'>COVID-19 PCR Testing</h4>
                    </div>
                    <div className='covid-services'>
                        <div className='blue-icon'><FaSyringe /></div>
                        <h4 className='blue-text text-center'>Immune Booster shot</h4>
                    </div>
                    <div className='covid-services'>
                        <div className='blue-icon'><BiPlusMedical /></div>
                        <h4 className='blue-text text-center'>Monoclonal Antibody Treatment</h4>
                    </div>
                </div>
            </div>
            <div className='blue-container'>
                <h2 className='white-header text-center'>
                    When to be seen for COVID-19
                </h2>
                <p className='p-text white-text text-center width-50 mx-auto my-5'>
                    If you’re experiencing any of the common symptoms of COVID-19 or have been 
                    in close contact with someone who tested positive, you should get tested.
                    <br></br><br></br>
                    You can get a COVID-19 test by making an appointment online or visiting 
                    our walk-in mobile stations. At Qcare, we offer three different types of 
                    testing:
                </p>
                <div className='container'>
                    <div className='row w-100 mx-0 g-5'>
                        <div className='col-lg-4 text-center d-flex flex-column justify-content-start'>
                            <div className='slide-icon'><SiSpeedtest /></div>
                            <h3 className='white-text text-center'>Rapid testing</h3>
                            <p className='white-text p-text text-center'>
                                This is a nasopharyngeal swab test for COVID-19. The test results are 
                                available in as little as 24 hours. 
                            </p>
                        </div>
                        <div className='col-lg-4 text-center d-flex flex-column justify-content-start'>
                            <div className='slide-icon'><GiVial /></div>
                            <h3 className='white-text text-center'>PCR testing</h3>
                            <p className='white-text p-text text-center'>
                                The nasopharyngeal swab is sent to a local lab to check for COVID-19. 
                                The PCR test takes a closer look at the organisms on the swab. It takes 
                                longer to get your results back but may be more accurate than a rapid test.
                            </p>
                        </div>
                        <div className='col-lg-4 text-center d-flex flex-column justify-content-start'>
                            <div className='slide-icon'><MdCoronavirus /></div>
                            <h3 className='white-text text-center'>Antibody test</h3>
                            <p className='white-text p-text text-center'>
                                We will draw a sample of your blood to check for COVID-19 antibodies. Having 
                                antibodies means your body has been exposed to COVID-19 and has fought it 
                                off. An antibody test is appropriate for someone who has not been vaccinated 
                                and suspects they’ve had COVID-19 before.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='white-container'>
                <div className='container'>
                    <h2 className='blue-header text-center'>Should you schedule a doctor’s visit if you have COVID-19?</h2>
                </div>
                <div className='row w-100 mx-0 mt-5'>
                    <div className='col-lg-6 rounded-card-left blue-container d-flex align-items-center'>
                        <p className='w-75 mx-auto white-text p-text text-center'>
                            COVID-19 is a highly contagious virus. To prevent the spread of illness, 
                            call Qcare before coming to the walk-in clinic. A medical professional 
                            will talk to you about your symptoms and whether you need to be seen 
                            in person. 
                        </p>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <div className='width-50 mx-auto rounded-corners blue-container py-0 my-5 my-lg-0'>
                            <img src='assets/img/pexels-shvets-production-8413181.jpg' className='right-blue-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='white-container'>
                <div className='container'>
                    <h2 className='red-header text-lg-start text-center'>What are symptoms of COVID-19?</h2>
                </div>
                <div className='row w-100 mx-0 mt-5'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <h4 className='width-50 mx-auto red-text text-center'>
                            COVID-19 is an illness caused by a newly discovered coronavirus. The 
                            virus is highly contagious and is spread between people through close 
                            contact.
                            <br></br><br></br>
                            People who get sick with COVID-19 may feel a range of symptoms that 
                            can vary from mild cold symptoms to breathing problems that require 
                            hospitalization.
                            <br></br><br></br>
                            If you have diabetes, heart problems, or lung disease, you may be at 
                            higher risk of getting sick from COVID-19.
                        </h4>
                    </div>
                    <div className='col-lg-6 rounded-card-right red-container d-flex flex-column justify-content-center'>
                        <h4 className='white-text text-center w-75 mx-auto'>
                            The CDC says <a href='https://www.cdc.gov/coronavirus/2019-ncov/vaccines/stay-up-to-date.html' className='white-link'>symptoms</a> of COVID-19 include:
                        </h4>
                        <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: 'fit-content'}}>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Fever or chills</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Cough</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Headache</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Sore throat</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Shortness of breath</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Difficulty breathing</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Fatigue</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Muscle or body aches</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; New loss of taste or smell</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Congestion or runny nose</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><RiSurgicalMaskFill className='list-icon'/>&nbsp; Nausea, vomiting, or diarrhea</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row w-100 mx-0 mt-5'>
                    <div className='col-lg-6 rounded-card-left red-container d-flex flex-column justify-content-center'>
                        <p className='white-text p-text w-75 mx-auto text-center'>
                            If you’re experiencing <a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html' className='white-link'>warning signs</a> of COVID-19, call 911 or go to the 
                            Emergency Room. You need immediate medical help in you’re experiencing:
                        </p>
                        <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: 'fit-content'}}>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><IoWarning className='list-icon'/>&nbsp; Difficulty breathing</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><IoWarning className='list-icon'/>&nbsp; Persistent pain or pressure in the chest</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><IoWarning className='list-icon'/>&nbsp; New confusion</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><IoWarning className='list-icon'/>&nbsp; Loss of consciousness</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text white-text fw-semibold'><IoWarning className='list-icon'/>&nbsp; Pale, gray, or blue-colored skin, lips, or nail beds</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <div className='width-50 mx-auto rounded-corners red-container py-0 my-5 my-lg-0'>
                            <img src='assets/img/pexels-andrea-piacquadio-3768582.jpg' className='right-red-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='white-container container'>
                <h2 className='red-header text-center'>What to expect at a COVID-19 visit</h2>
                <div className='mt-5 rounded-corners red-container text-center' style={{padding: '5rem'}}>
                    <p className='text-center p-text white-text'>
                        If you need to come in for a COVID-19 visit, the QCare medical professionals 
                        will gather information to determine the best treatment for you.
                        <br></br><br></br>
                        We’ll evaluate your vital signs, including your oxygen levels. A clinician 
                        will do a physical exam and listen to your lungs and evaluate your breathing.
                        <br></br><br></br>
                        Based on their findings, your provider will recommend the best course of 
                        treatment.
                        <br></br><br></br>
                        The best way to prevent getting sick with COVID-19 is to get vaccinated. The&nbsp;
                        <a href='https://www.cdc.gov/coronavirus/2019-ncov/vaccines/stay-up-to-date.html' className='white-link'>CDC recommends</a> 
                        &nbsp;all people above 5 years old get the primary series and a booster shot. Children 
                        between 6 months and 4 years old should get the primary series.
                        <br></br><br></br>
                        Visit our <a href='/vaccines' className='white-link'>Vaccines and Immunization</a> 
                        &nbsp;page for more information about your COVID-19 shot or booster.
                    </p>
                    <a href='/appointment' className='btn btn-lite-red mt-5'>Schedule your COVID-19 shot or booster here</a>
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

export default Covid