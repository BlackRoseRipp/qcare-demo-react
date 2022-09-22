import React from 'react';
import { FaClinicMedical, FaFileMedical, FaHome, FaPhoneAlt, FaShuttleVan, FaThermometer } from 'react-icons/fa';
import { MdHealing } from 'react-icons/md';
import { RiMentalHealthFill, RiTestTubeFill } from 'react-icons/ri';
import './Services.css';

const Services = () => {
    const services = {
        illness: [
            'Allergies',
            'Cold and Flu',
            'COVID-19',
            'ENT',
            'Hand, foot and mouth disease',
            'Lyme disease',
            'Pink eye',
            'Respiratory illnesses',
            'Sexually Transmitted Infections (STIs)',
            'Sinus infections',
            'Skin ailments',
            'Stomach ailments',
            'Strep throat',
            'Urinary tract infection'
        ],
        injury: [
            'Bites and stings',
            'Broken bones',
            'Burns',
            'Cuts and Scrapes',
            'Frostbite',
            'Heat exhaustion',
            'Lice',
            'Strains and sprains',
            'Sutures'
        ],
        wellness: [
            'Camp, school, and sports physicals',
            'Flu shots',
            'Vaccinations'
        ],
        work: [
            'DOT physicals',
            'Drug and alcohol screenings',
            'Work-related physicals'
        ]
    }

    const tests = [
        'COVID-19 ANTIGEN',
        'Alanine Aminotransferase (ALT)',
        'Albumin', 
        'Alkaline Phosphatase (ALP)', 
        'Amylase', 
        'Aspartate Aminotransferase (AST)', 
        'Blood Urea Nitrogen (BUN)', 
        'B-Type Natriuretic Peptide (BNP)', 
        'Carbon Dioxide',
        'Calcium', 
        'Chloride', 
        'Cholesterol', 
        'Community Screening', 
        'Creatinine', 
        'Creatine Kinase (CK)', 
        'Gamma Glutamyl Transferace (GGT)', 
        'Glucose', 
        'Glycosylated Hemoglobin', 
        'HDL Cholesterol', 
        'Hemoglobin', 
        'Hematocrit', 
        'Influenza', 
        'Occult Blood', 
        'Potassium', 
        'Pregnancy Test (Urine)', 
        'COVID-19 MOLECULAR',
        'RSV (Respiratory Syncytial Virus)', 
        'COVID-19 ANTIBODY', 
        'Sodium', 
        'Strep A Test', 
        'Total Bilirubin', 
        'Total Protein', 
        'Triglycerides', 
        'Urinalysis',
    ]

    return (
        <div>
            <div className="services-hero-container">
                <div className="container-lg my-auto">
                    <div className="hero-body text-center">
                        <h6 className="hero-header">Urgent care and preventative healthcare for all ages in New York City</h6>
                        <p className="hero-text">
                            When you or your loved one have an urgent illness or an accident, 
                            you need access to medical care that’s immediate and convenient. 
                            At QCare, we provide a full array of services for New York City 
                            residents of every age – from infants to seniors.
                        </p>
                        <a className="btn btn-hero" href="/plan-your-visit" role="button">Plan Your Next Visit</a>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className="red-header text-center py-5 mt-0">Our Available Services</h2>
                <div className='row w-75 mx-auto g-5 red-container rounded-corners py-4'>
                    <div className="col-lg-4 col-md-6 text-center">
                        <a href="#" className="btn btn-service">
                            <img className='service-icon-img' src='assets/img/covid-testing-img.png' />
                            <span className='service-icon-text'>COVID-19 Testing</span>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <a href="#" className="btn btn-service">
                            <img className='service-icon-img' src='assets/img/trauma-care-img.png' />
                            <span className='service-icon-text'>Wellness Care</span>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <a href="#" className="btn btn-service">
                            <img className='service-icon-img' src='assets/img/pediatric-care-img.png' />
                            <span className='service-icon-text'>Pediatric Care</span>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <a href="#" className="btn btn-service">
                            <img className='service-icon-img' src='assets/img/xray-img.png' />
                            <span className='service-icon-text'>X-Ray</span>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <a href="#" className="btn btn-service">
                            <img className='service-icon-img' src='assets/img/allergies-img.png' />
                            <span className='service-icon-text'>Allergies & Asthma</span>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <a href="#" className="btn btn-service">
                            <img className='service-icon-img' src='assets/img/vaccination-img.png' />
                            <span className='service-icon-text'>Vaccinations</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="white-container container pt-4">
                <div className='row w-100 mx-0 mt-4'>
                    <div className='col-lg-5 d-flex flex-column justify-content-center'>
                        <h3 className='red-header text-right'>Access care you need,<br></br> When you need it</h3>
                    </div>
                    <div className='col-lg-7'>
                        <div className="vstack">
                            <a className='btn btn-care text-right' href='/locations'>
                                <FaClinicMedical className='red-icon' />&nbsp; Visit one of our full clinic locations
                            </a>
                            <a className='btn btn-care text-right' href='/mobile-stations'>
                                <FaShuttleVan className='red-icon' />&nbsp; Stop by a QCare mobile care station near you for a walk-in visit
                            </a>
                            <a className='btn btn-care text-right' href='/home-visits'>
                                <FaHome className='red-icon' />&nbsp; Schedule a house call
                            </a>
                            <a className='btn btn-care text-right' href='tel:877-722-7318'>
                                <FaPhoneAlt className='red-icon' />&nbsp; Call to schedule a visit at your convenience
                            </a>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <a href='/plan-your-visit' className='btn btn-red'>Plan Your Visit</a>
                </div>
            </div>
            <div className='grey-container'>
                <div className='container'>
                    <div className='row w-100 mx-0 g-5'>
                        <div className='col-lg-6 order-5 order-lg-1 blue-container px-4' id='servicesAccordionContainer'>
                            <h3 className='white-header text-center mt-0'>Services and Care</h3>
                            <div className='accordion' id='servicesAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='headingServiceOne'>
                                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseServiceOne' aria-expanded='false' aria-controls='collapseServiceOne'>
                                            Illnesses
                                        </button>
                                    </h2>
                                    <div className='accordion-collapse collapse' id='collapseServiceOne' aria-labelledby='headingServiceOne' data-bs-parent='#servicesAccordion'>
                                        <div className='accordion-body'>
                                            <div className='row w-100'>
                                                {services.illness.map((illness, index) => {
                                                    return (
                                                        <div className={index % 2 === 0 ? 'col-md-7' : 'col-md-5'}>
                                                            <h6 className='service-text'><FaThermometer />&nbsp; {illness}</h6>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='headingServiceTwo'>
                                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseServiceTwo' aria-expanded='false' aria-controls='collapseServiceTwo'>
                                            Injuries
                                        </button>
                                    </h2>
                                    <div className='accordion-collapse collapse' id='collapseServiceTwo' aria-labelledby='headingServiceTwo' data-bs-parent='#servicesAccordion'>
                                        <div className='accordion-body'>
                                            <div className='row w-100'>
                                                {services.injury.map((injury) => {
                                                    return (
                                                        <div className='col-md-6'>
                                                            <h6 className='service-text'><MdHealing />&nbsp; {injury}</h6>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='headingServiceThird'>
                                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseServiceThird' aria-expanded='false' aria-controls='collapseServiceThird'>
                                            Wellness and Prevention
                                        </button>
                                    </h2>
                                    <div className='accordion-collapse collapse' id='collapseServiceThird' aria-labelledby='headingServiceThird' data-bs-parent='#servicesAccordion'>
                                        <div className='accordion-body'>
                                            <div className='row w-100'>
                                                {services.wellness.map((wellness, index) => {
                                                    return (
                                                        <div className={index % 2 === 0 ? 'col-md-7' : 'col-md-5'}>
                                                            <h6 className='service-text'><RiMentalHealthFill />&nbsp; {wellness}</h6>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='headingServiceFour'>
                                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseServiceFour' aria-expanded='false' aria-controls='collapseServiceFour'>
                                            Work-Related Services
                                        </button>
                                    </h2>
                                    <div className='accordion-collapse collapse' id='collapseServiceFour' aria-labelledby='headingServiceFour' data-bs-parent='#servicesAccordion'>
                                        <div className='accordion-body'>
                                            <div className='row w-100'>
                                                {services.work.map((work) => {
                                                    return (
                                                        <div className='col-md-6'>
                                                            <h6 className='service-text'><FaFileMedical />&nbsp; {work}</h6>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-lg-5 d-flex flex-column justify-content-center'>
                            <h3 className='blue-header ps-5'>We offer a full range of preventive and urgent care</h3>
                            <div className='text-center'>
                                <a href='/locations' className='btn btn-blue'>Find a Location Near You</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='white-container container'>
                <h3 className='blue-header text-center'>Just some of the tests available at our mobile stations and full clinic</h3>
                <div className='blue-container' id='testsContainer'>
                    <div className='row w-100 mx-0'>
                        {tests.map((test) => {
                            return (
                                <div className='col-lg-4 col-md-6'>
                                    <h6 className='test-text'><RiTestTubeFill style={{fontSize: '2rem'}}/>&nbsp; {test}</h6>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services