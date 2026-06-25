import { useState } from 'react'

import icon1 from '../icons/Vector-1.svg'
import icon2 from '../icons/Vector-2.svg'
import icon3 from '../icons/Vector-3.svg'
import icon4 from '../icons/Vector-4.svg'

import advantagesImg from '../images/advantages.jpg'
import technologyImg from '../images/technology.jpg'


function Benefits() {

    const benefitsItems=[
        {id:1, icon:icon1, title:"Amplify Insights", parag:"Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."},
        {id:2, icon:icon2, title:"Control Your Global Presence", parag:"Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."},
        {id:3, icon:icon3, title:"Remove Language Barriers", parag:"Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."},
        {id:4, icon:icon4, title:"Visualize Growth", parag:"Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."},
    ];

    const benefitsTechnology=[
        {id:1, number:"01", text:"Spot Trends in Seconds: No more digging through numbers."},
        {id:1, number:"02", text:"Get Everyone on the Same Page: Share easy-to-understand reports with your team.  "},
        {id:1, number:"03", text:"Make Presentations Pop: Interactive maps and dashboards keep your audience engaged."},
        {id:1, number:"04", text:"Your Global Snapshot: Get a quick, clear overview of your entire operation."},
    ]


  return (
    <section className='benefits'>
        <div className="benefits_body container">
            <div className="benefits_main content">
                <div className="benefits_advantages advantages">
                    <div className="advantages_heading">
                        <span id="benefits" className="advantages_title">Benefits</span>
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
            <div className="benefits_second content">
                <div className="benefits_technology technology">
                    <div className="technology_body">
                        <div className="technology_heading">
                            <h2 className="technology_h2">See the Big Picture</h2>
                            <p className="technology_subtitle subtitle">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>
                        </div>
                        <div className="technology_content">
                            {benefitsTechnology.map(item=>(
                                <div className="technology_item" key={item.id}>
                                    <p className="technology_number">{item.number}</p>
                                    <p className="technology_text subtitle">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <a href="" className="technology_button button-dis">Discover More</a>
                    </div>
                    <div className="technology_image-container">
                        <img src={technologyImg} alt="" className="technology_image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits