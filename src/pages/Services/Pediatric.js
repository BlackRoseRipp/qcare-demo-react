import React from 'react'
import { FaBaby, FaDizzy, FaEye, FaHandHoldingMedical, FaHeadSideCough, FaHeadSideMask, FaHeadSideVirus, FaLungs, FaViruses, FaXRay } from 'react-icons/fa'
import { GiBrokenBone, GiMedicalThermometer, GiSewingNeedle } from 'react-icons/gi'
import { IoBandageSharp, IoEarSharp, IoMedicalSharp } from 'react-icons/io5'
import { RiMentalHealthFill, RiSurgicalMaskFill, RiVirusFill } from 'react-icons/ri'
import './Pediatric.css'

const Pediatric = () => {
    return (
        <div>
            <div className="pediatric-hero-container">
                <div className="container-lg my-auto">
                    <div className="hero-body text-center">
                        <h1 className="hero-header">Pediatric Care</h1>
                        <h6 className="hero-text">
                            At Qcare, we treat your children like our own
                        </h6>
                        <a className='btn btn-blue' href='/appointment'>Schedule an Appointment for Your Child</a>
                    </div>
                </div>
            </div>
            <div className='white-container container text-center'>
                <h2 className='blue-header mb-5'>What is pediatric care?</h2>
                <div className='blue-container rounded-corners'>
                    <p className='hero-text'>
                        Children can become sick or injured during all hours of the day, any day of the week. 
                        This makes urgent care at locations like Qcare an essential provider for children’s 
                        pediatric care. When your child is feeling sick, and the pediatrician’s office is 
                        busy or closed, Qcare is there to provide excellent and warm medical care for children.
                        <br></br><br></br>
                        At Qcare, our team of specialized pediatric care providers is available after hours 
                        to see your little one. We care for kids of all ages — from infants to adolescents. 
                        <br></br><br></br>
                        Depending on your child’s needs, they can be seen for a well-child checkup or at one 
                        of our walk-in clinic locations. Click below to find out the pediatric location that 
                        is right for your child. 
                    </p>
                </div>
            </div>
            <div className='mb-5'>
                <h2 className='red-header text-center mb-5'>Well-child healthcare visits</h2>
                <div className='row w-100 mx-auto'>
                    <div className='col-lg-6 d-flex align-items-center' id='wellChildImg'>
                        <div className='w-50 mx-auto red-container rounded-corners py-0'>
                            <img className='well-child-img' src='assets/img/pexels-vlada-karpovich-4609046.jpg' />
                        </div>
                    </div>
                    <div className='col-lg-6 rounded-card-right red-container'>
                        <p className='hero-text'>
                            The purpose of a well-child pediatric visit is to check your child’s 
                            growth and development. They’re required for back to school forms 
                            and to participate in athletics. However, their necessary to a 
                            child’s well-being.
                            <br></br><br></br>
                            Parents are encouraged to ask questions and bring up any concerns 
                            you may have. During a well-child exam, a doctor will look at your 
                            child’s:
                        </p>
                        <div className='d-flex flex-column justify-content-center w-50 mx-auto my-4'>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><FaBaby className='list-icon'/>&nbsp; Growth & Development</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><FaEye className='list-icon'/>&nbsp; Vision & Hearing</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><RiMentalHealthFill className='list-icon'/>&nbsp; Behavior</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><FaHandHoldingMedical className='list-icon'/>&nbsp; Immunization Status</h4>
                            </div>
                        </div>
                        <p className='hero-text'>
                            Our providers are trained to screen for common childhood illnesses. If 
                            any part of the exam raises a concern, the doctor will recommend the 
                            appropriate testing. Many lab and diagnostic tests are available right 
                            at Qcare.
                            <br></br><br></br>
                            Your child’s provider will make sure your child is up-to-date with the 
                            recommended immunizations for his or her age. You can see a list of the 
                            immunizations we offer here.
                        </p>
                    </div>
                </div> 
            </div>
            <div className='red-container'>
                <div className='container'>
                    <h2 className='white-header text-center mb-5'>Pediatric walk-in clinic</h2>
                    <p className='hero-text text-center'>
                        The pediatric walk-in clinic is an urgent care service just for kids. 
                        Our specialized pediatric care providers treat your child’s <strong>non-emergency</strong> 
                        illnesses or injuries. 
                        <br></br><br></br>
                        You can bring your child to the Urgent Care walk-in clinic for issues that 
                        need immediate attention. This may include:
                    </p>
                    <div className='carousel slide' id='pediatricSlide'>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#pediatricSlide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#pediatricSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#pediatricSlide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className='carousel-inner justify-content-center mx-auto'>
                            <div className='carousel-item active'>
                                <div className='hstack gap-3 d-flex align-items-start w-75 mx-auto'>
                                    <div className='slide-item'>
                                        <GiMedicalThermometer className='slide-icon' />
                                        <div className='slide-text ps-0'>Fever</div>
                                    </div>
                                    <div className='slide-item'>
                                        <FaHeadSideCough className='slide-icon' />
                                        <div className='slide-text ps-0'>Cough</div>
                                    </div>
                                    <div className='slide-item'>
                                        <RiSurgicalMaskFill className='slide-icon' />
                                        <div className='slide-text ps-0'>Sore Throat</div>
                                    </div>
                                    <div className='slide-item'>
                                        <IoEarSharp className='slide-icon' />
                                        <div className='slide-text ps-0'>Ear Infection</div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='hstack gap-3 d-flex align-items-start w-75 mx-auto'>
                                    <div className='slide-item'>
                                        <FaDizzy className='slide-icon' />
                                        <div className='slide-text ps-0'>Nausea, vomiting, & diarrhea</div>
                                    </div>
                                    <div className='slide-item'>
                                        <FaLungs className='slide-icon' />
                                        <div className='slide-text ps-0'>Allergies & Asthma</div>
                                    </div>
                                    <div className='slide-item'>
                                        <FaEye className='slide-icon' />
                                        <div className='slide-text ps-0'>Pink eye</div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='hstack gap-3 d-flex align-items-start w-75 mx-auto'>
                                    <div className='slide-item'>
                                        <IoBandageSharp className='slide-icon' />
                                        <div className='slide-text ps-0'>Minor cuts, scrapes, or burns</div>
                                    </div>
                                    <div className='slide-item'>
                                        <GiBrokenBone className='slide-icon' />
                                        <div className='slide-text ps-0'>Broken bones or sprains</div>
                                    </div>
                                    <div className='slide-item'>
                                        <IoMedicalSharp className='slide-icon' />
                                        <div className='slide-text ps-0'>Foreign body removal</div>
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
                    <p className='hero-text mt-5 text-center'>
                        <strong>If your child is experiencing a life-threatening emergency, call 911.</strong> 
                        Children should not be brought to urgent care if they’re having difficulty breathing, 
                        loss of consciousness or excessive bleeding. 
                    </p>
                </div>
            </div>
            <div className='white-container'>
                <h2 className='blue-header text-center mb-5'>What to expect in pediatric care</h2>
                <div className='row w-100 mx-0'>
                    <div className='col-lg-6 rounded-card-left blue-container'>
                        <p className='hero-text'>
                            At Qcare, a doctor or nurse practitioner will evaluate your child to 
                            determine what kind of treatment he or she needs.
                            <br></br><br></br>
                            Sometimes we need to do tests or minor procedures to get your child 
                            the right treatment. Our providers use child-friendly techniques 
                            throughout the process to keep pain and stress to a minimum.
                            <br></br><br></br>
                            At Qcare, we can help children with the following:
                        </p>
                        <div className='d-flex flex-column justify-content-center w-50 mx-auto my-4'>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><FaXRay className='list-icon'/>&nbsp; X-Rays</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><GiSewingNeedle className='list-icon'/>&nbsp; Stitches</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><FaHeadSideMask className='list-icon'/>&nbsp; Rapid Strep</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><FaViruses className='list-icon'/>&nbsp; Flu Tests</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><RiVirusFill className='list-icon'/>&nbsp; COVID-19 Testing</h4>
                            </div>
                            <div className='icon-list-item'>
                                <h4 className='icon-list-text hero-text'><FaHeadSideVirus className='list-icon'/>&nbsp; Mononucleosis testing</h4>
                            </div>
                        </div>
                        <p className='hero-text'>
                            Our medical providers may write prescriptions for medications like 
                            antibiotics, depending on your child’s needs. With our comprehensive 
                            services, you’ll avoid going to the hospital for minor issues — and 
                            get your child feeling better sooner.
                        </p>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center' id='wellChildImg'>
                        <div className='w-50 mx-auto blue-container rounded-corners py-0'>
                            <img className='expect-pediatric-img' src='assets/img/pexels-adhitya-rizky-3890576.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pediatric