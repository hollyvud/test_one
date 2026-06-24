import { useState } from 'react'
import './styles/main.scss'
import './App.css'
import Header from './components/header.jsx'
import Benefits from './components/benefits.jsx'

import desktopImg from './images/desck.png'
import tabletImg from './images/tablet.png'
import mobileImg from './images/mobile.png'

import logoOne from './images/logo-1.png'
import logoTwo from './images/logo-2.png'
import logoThree from './images/logo-3.png'
import logoFour from './images/logo-4.png'
import logoFive from './images/logo-5.png'
import logoSix from './images/logo-6.png'

function App() {

  const logos = [
    {id:1, src: logoOne, alt: 'Лого'},
    {id:2, src: logoTwo, alt: 'Лого'},
    {id: 3, src: logoThree, alt: 'Лого'},
    {id: 4, src: logoFour, alt: 'Лого'},
    {id: 5, src: logoFive, alt: 'Лого'},
    {id: 6, src: logoSix, alt: 'Лого'},
  ]

  return (
    <>
      <Header/>
      <main>
        <section className='head'>
          <div className='head_body container'>
            <h1 className='head_title'>Browse everything.</h1>
            <div className='head_back'>
              <picture>
                <source media="(max-width: 731px)" srcSet={mobileImg} />
                <source media="(max-width: 800px)" srcSet={tabletImg} />
                <img className='head_image' src={desktopImg} alt="Фото" />
              </picture>
            </div>
          </div>
        </section>
        <section className='trust'>
          <div className="trust_body container">
            <span className="trust_subtitle subtitle">Trusted by:</span>
            <div className="trust_clients">
              {logos.map(logo =>(
                <img className='trust_item' key={logo.id} src={logo.src} alt={logo.alt}/>
              ))}
            </div>
          </div>
        </section>
        <Benefits/>
      </main>
    </>
      
  )
}

export default App
