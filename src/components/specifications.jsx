import { useState } from 'react'

import check from '../icons/Check.svg'
import close from '../icons/Close.svg'

import specsCitatImg from '../images/specs.jpg'


function Specifications() {



  return (
    <section className='specs'>
        <div className="specs_body container">
            <div className="specs_main content">
                <div className="specs_difference difference">
                    <div className="difference_heading">
                        <span className="difference_title">Specs</span>
                        <h2 className="difference_h2">Why Choose Area?</h2>
                        <p className="difference_subtitle subtitle">You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. </p>
                        <a href="" className="difference_button button-dis">Discover More</a>
                    </div>
                    <div className="difference_body">
                        <div className="difference_list border">
                            <div className="difference_cell">
                                <p className="difference_logo">Area</p>
                            </div>
                            <div className="difference_item no-border-left">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Ultra-fast browsing</p>
                            </div>
                            <div className="difference_item no-border-left">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Ultra-fast browsing</p>
                            </div>
                            <div className="difference_item no-border-left">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Ultra-fast browsing</p>
                            </div>
                            <div className="difference_item no-border-left">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Ultra-fast browsing</p>
                            </div>
                            <div className="difference_item no-border-left">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Ultra-fast browsing</p>
                            </div>
                            <div className="difference_item no-border-left no-border-bottom">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Ultra-fast browsing</p>
                            </div>
                        </div>
                        <div className="difference_list">
                            <div className="difference_cell">
                                <p className="difference_logo-our">WebSurge</p>
                            </div>
                            <div className="difference_item">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Fast browsing</p>
                            </div>
                            <div className="difference_item">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Basic AI recommendations</p>
                            </div>
                            <div className="difference_item">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Restricts customization</p>
                            </div>
                            <div className="difference_item">
                                <img src={close} alt="" className="difference_icon" />
                                <p className="difference_text">Basic AI insights</p>
                            </div>
                            <div className="difference_item">
                                <img src={check} alt="" className="difference_icon" />
                                <p className="difference_text">Fast browsing</p>
                            </div>
                            <div className="difference_item">
                                <img src={close} alt="" className="difference_icon" />
                                <p className="difference_text">Potential display errors</p>
                            </div>
                        </div>
                        <div className="difference_list">
                            <div className="difference_cell">
                                <p className="difference_logo-our">HyperView</p>
                            </div>
                            <div className="difference_item">
                                <img src={close} alt="" className="difference_icon" />
                                <p className="difference_text">Moderate speeds</p>
                            </div>
                            <div className="difference_item">
                                <img src={close} alt="" className="difference_icon" />
                                <p className="difference_text">No AI assistance</p>
                            </div>
                            <div className="difference_item">
                                <img src={close} alt="" className="difference_icon" />
                                <p className="difference_text">Steep learning curve</p>
                            </div>
                            <div className="difference_item">
                                <img src={close} alt="" className="difference_icon" />
                                <p className="difference_text">No AI assistance</p>
                            </div>
                            <div className="difference_item">
                                <img src={close} alt="" className="difference_icon" />
                                <p className="difference_text">Moderate speeds</p>
                            </div>
                            <div className="difference_item no-border-bottom">
                                <img src={close} alt="" className="difference_icon" />
                                <p className="difference_text">Partial UTF-8 support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="specs_second content">
                <div className="specs_citation citation">
                    <div className="citation_image-container">
                        <img src={specsCitatImg} alt="" className="citation_image" />
                    </div>
                    <div className="citation_body">
                        <div className="citation_quote-container">
                            <p className="citation_quote">“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”</p>
                        </div>
                        <div className="citation_author-container">
                            <p className="citation_author subtitle">John Smith</p>
                            <p className="citation_date">Head of Data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Specifications