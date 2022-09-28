import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-header'>
                <div className='container'>
                    <h1 className='contact-title'>How Can We Help?</h1>
                    <h5 className='form-description text-white'>
                        If you need medical care, do not use the form below. Instead, please request a visit here: <a href='/appointment' className='btn btn-blue-lite'>Book an Appointment</a>
                        <br></br>
                        Or Call 1-877-Qcare18 or 1 877-722-7318.
                    </h5>
                </div>
            </div>
            <div className='form-container container'>
                <h3 className='form-header text-lg-start text-center'>Contact us for more information about our company and services.</h3>
                <p className='form-description text-lg-start text-center'>
                    This form should not be used to request an appointment or to relay 
                    any medical information.
                    <br></br>
                    Please call 911 if you’re experiencing a medical emergency.
                </p>
                <div className='row w-100 g-4 mx-0'>
                    <div className='col-lg-4 col-md-6'>
                        <input 
                            type='name'
                            className='form-control'
                            id='contactNameInput'
                            placeholder='Name'
                        ></input>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <input 
                            type='email'
                            className='form-control'
                            id='contactEmailInput'
                            placeholder='Email'
                        ></input>
                    </div>
                    <div className='col-lg-4'>
                        <input 
                            type='text'
                            className='form-control'
                            id='contactPhoneInput'
                            placeholder='Phone Number'
                        ></input>
                    </div>
                    <div className='col-12'>
                        <textarea
                            className='form-control'
                            id='contactNameInput'
                            placeholder='Message'
                            rows='6'
                        ></textarea>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button type='submit' className='btn btn-contact-submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact