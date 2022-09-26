import React from 'react'
import { FaViruses } from 'react-icons/fa'
import InsuranceSlider from '../../components/InsuranceSlider/InsuranceSlider'
import Data from '../../components/Locations/Data'
import StoreLocator from '../../components/Locations/StoreLocator'
import './Vaccines.css'

const Vaccines = () => {
    return (
        <div>
            <div className="vaccine-hero-container">
                <div className="container-lg my-auto">
                    <div className="hero-body text-center">
                        <h1 className="hero-header">Vaccines and immunization at QCare</h1>
                        <h4 className='hero-text'>
                            Visit QCare mobile care stations throughout New York City to stay up 
                            to date on all your vaccines and immunization
                            <br></br><br></br>
                            Schedule an appointment with QCare if you need a vaccine or immunization 
                            in the New York City area. We treat patients of all ages, from infants 
                            to seniors
                        </h4>
                        <a className='btn btn-blue' href='/appointment'>Schedule an Appointment</a>
                    </div>
                </div>
            </div>
            <div className='white-container'>
                <div className='container'>
                    <h2 className='blue-header text-center'>What is a vaccine and immunization appointment?</h2>
                </div>
                <div className='row w-100 mx-auto my-5'>
                    <div className='col-lg-6 rounded-card-left blue-container d-flex align-items-center'>
                        <h4 className='white-text text-start w-75 mx-auto'>
                            Getting a vaccine is an important way to prevent getting sick from 
                            infectious diseases.
                            <br></br><br></br>
                            A <strong>vaccine</strong> introduces information about an illness 
                            to your body. This causes your immune system to develop a defense 
                            against it.
                            <br></br><br></br>
                            <strong>Immunization</strong> is the process of getting a vaccine 
                            and developing an immune response to it. When you’re immunized, 
                            your body will protect you when you’re exposed to the disease.
                        </h4>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <div className='w-50 mx-auto rounded-corners blue-container py-0 fullscreen'>
                            <img src='assets/img/pexels-pixabay-356040.jpg' className='right-blue-img' />
                        </div>
                    </div>
                </div>
                <div className='row w-100 mx-auto' style={{marginTop: '5rem'}}>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <div className='w-50 mx-auto rounded-corners blue-container py-0 fullscreen'>
                            <img src='assets/img/pexels-cdc-3992931.jpg' className='left-blue-img' />
                        </div>
                    </div>
                    <div className='col-lg-6 rounded-card-right blue-container d-flex align-items-center'>
                        <h4 className='white-text text-start w-75 mx-auto'>
                            People need vaccines and immunizations for different phases of life.
                            <br></br><br></br>
                            Babies need vaccines to be protected from illnesses while their 
                            immune system is developing. Older adults may need vaccines to 
                            remind the immune system to keep fighting. 
                            <br></br><br></br>
                            At Qcare, located at mobile care units throughout the New York 
                            City area, we offer vaccines and immunizations for every age and 
                            stage of life.
                        </h4>
                    </div>
                </div>
            </div>
            <div className='red-container'>
                <div className='container'>
                    <h2 className='white-header text-center'>Why you need to be seen for a vaccine and immunization visit</h2>
                </div>
                <div className='row w-100 mx-0 mt-5'>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <h3 className='white-text text-center w-75 mx-auto'>
                            The&nbsp;
                            <a href='https://www.cdc.gov/vaccines/adults/rec-vac/index.html' className='white-link'>CDC recommends</a>
                            &nbsp;different vaccines based on your age and lifestyle. Check 
                            your vaccination and immunization card or record to make sure you’re on track. 
                            <br></br><br></br>
                            You may need certain vaccines before starting a new job or traveling. Our 
                            professionals at Qcare will help you get immunized for your needs.
                        </h3>
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-center rounded-card-right grey-container'>
                        <h4 className='red-text text-center'>
                            At Qcare, we offer vaccines to protect against:
                        </h4>
                        <div className='d-flex flex-column justify-content-center mx-auto my-4' style={{width: 'fit-content'}}>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text red-text fw-semibold'><FaViruses className='list-icon'/>&nbsp; Chickenpox</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text red-text fw-semibold'><FaViruses className='list-icon'/>&nbsp; MMR (measles, mumps, rubella)</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text red-text fw-semibold'><FaViruses className='list-icon'/>&nbsp; Tdap (tetanus, diptheria, pertussis)</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text red-text fw-semibold'><FaViruses className='list-icon'/>&nbsp; Meningitis</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text red-text fw-semibold'><FaViruses className='list-icon'/>&nbsp; Flu</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text red-text fw-semibold'><FaViruses className='list-icon'/>&nbsp; COVID-19 </h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text red-text fw-semibold'><FaViruses className='list-icon'/>&nbsp; Hepatitis A & B</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text red-text fw-semibold'><FaViruses className='list-icon'/>&nbsp; HPV</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text red-text fw-semibold'><FaViruses className='list-icon'/>&nbsp; Shingles</h4>
                            </div>
                        </div>
                        <div className='text-center'>
                            <a href='/appointment' className='btn btn-red'>Schedule your next vaccine with QCare</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='white-container container'>
                <h2 className='red-header text-center'>What to expect at a vaccine and immunization visit</h2>
                <div className='rounded-corners red-container mt-5' style={{padding: '5rem'}}>
                    <h4 className='white-text text-center'>
                        At a vaccine and immunization visit, you’ll share your health history 
                        and your vaccine record. Be sure to bring an immunization card if you 
                        have one.
                        <br></br><br></br>
                        A medical professional will make sure your shots are as quick and 
                        painless as possible. Let someone know if you’ve ever had a severe 
                        allergic reaction to any vaccinations in the past.
                        <br></br><br></br>
                        If you’re feeling sick or have a fever, stay home and reschedule your 
                        appointment for another time. 
                    </h4>
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

export default Vaccines