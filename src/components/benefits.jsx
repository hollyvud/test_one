import { useState } from 'react'

import icon1 from '../icons/Vector-1.svg'
import icon2 from '../icons/Vector-2.svg'
import icon3 from '../icons/Vector-3.svg'
import icon4 from '../icons/Vector-4.svg'

import advantagesImg from '../images/advantages.jpg'


function Benefits() {

    const benefitsItems=[
        {id:1, icon:icon1, title:"Amplify Insights", parag:"Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."},
        {id:2, icon:icon2, title:"Control Your Global Presence", parag:"Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."},
        {id:3, icon:icon3, title:"Remove Language Barriers", parag:"Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."},
        {id:4, icon:icon4, title:"Visualize Growth", parag:"Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."},
    ]


  return (
    <section className='benefits'>
        <div className="benefits_body container">
            <div className="benefits_main content">
                <div className="benefits_advantages advantages">
                    <div className="advantages_heading">
                        <span className="advantages_title">Benefits</span>
                        <h2 className="advantages_h2">We’ve cracked the code.</h2>
                        <p className="advantages_subtitle subtitle">Area provides real insights, without the data overload.</p>
                    </div>
                    <div className="advantages_body">
                        <div className="advantages_list">
                            {benefitsItems.map(item =>(
                                <div className="advantages_item" key={item.id}>
                                    <img className="advantages_icon" src={item.icon} alt={item.title}/>
                                    <div className="advantages_text">
                                        <h3 className="advantages_h3">{item.title}</h3>
                                        <p className="advantages_parag subtitle">{item.parag}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <img src={advantagesImg} alt="advantages" className="benefits_image" />
            </div>
        </div>
    </section>
  )
}

export default Benefits