import { useState } from 'react'
import howToImg from '../images/how-to.jpg'


function HowTo() {

    const mapItems = [
        {id:1, number:"01", title:"Get Started", subtitle:"With our intuitive setup, you’re up and running in minutes."},
        {id:2, number:"02", title:"Customize and Configure", subtitle:"Adapt Area to your specific requirements and preferences."},
        {id:3, number:"03", title:"Grow Your Business", subtitle:"Make informed decisions to exceed your goals."},
    ]

  return (
    <section className='how-to'>
        <div className="how-to_body container">
            <div className="how-to_main content">
                <div className="how-to_map map">
                    <div className="map_head">
                        <h2 className="map_h2">Map Your Success</h2>
                        <a href="" className="map_button button-dis">Discover More</a>
                    </div>
                    <div className="map_body">
                        {mapItems.map(item=>(
                            <div className="map_item" key={item.id}>
                                <div className="map_number">
                                    <p className="map_number-text">{item.number}</p>
                                </div>
                                <div className="map_text">
                                    <p className="map_title">{item.title}</p>
                                    <p className="map_subtitle subtitle">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="how-to_second">
                <div className="how-to_image-container">
                    <img src={howToImg} alt="" className="how-to_image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowTo