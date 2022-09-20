import React from 'react'
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
        </div>
    )
}

export default Pediatric