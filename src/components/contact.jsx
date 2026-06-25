import { useState } from 'react'


function Contact() {

  return (
    <section className='contact'>
        <div className="contact_body container">
            <div className="contact_content content">
                <div className="contact_heading">
                    <h2 className="contact_h2">Connect with us</h2>
                </div>
                <div className="contact_text">
                    <p className="contact_subtitle subtitle">Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
                </div>
                <div className="contact_button-body">
                    <a href="" className="contact_button button-more">Learn More
                        <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.01037 4.9934V1.05184L5.64939 1.09142L0.735155 6.01131L0 5.27615L4.91423 0.361923L4.96513 1.00094H1.0066V0L6 0.0113101V4.9934H5.01037Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact