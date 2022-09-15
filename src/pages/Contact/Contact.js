import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-header'>
                <div className='container'>
                    <h1 className='contact-title'>Reach Out to Us!</h1>
                </div>
            </div>
            <div className='form-container container'>
                <h3 className='form-header'>Contact us for more information about your urgent care needs.</h3>
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