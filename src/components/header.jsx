import { useState } from 'react'

function Header() {

  const [isActive, setActive] = useState(false);

  function setActiveOverlay(){
    setActive(!isActive)
  }

  return (
    <header className='header'>
      <div className='header_body'>
        <div className="header_body-inner container">
          <a href="/" aria-label="Home" title="Home" className="header_logo">Area</a>
          <div className={isActive ? 'header_overlay is-active' : 'header_overlay'} data-js-header-overlay>
            <nav className="header_menu">
              <ul className='header_menu-list'>
                <li className='header_menu-item'>
                  <a href="/" className="header_menu-link">Benefits</a>
                </li>
                <li className='header_menu-item'>
                  <a href="/" className="header_menu-link">Specifications</a>
                </li>
                <li className='header_menu-item'>
                  <a href="/" className="header_menu-link">How-to</a>
                </li>
                <li className='header_menu-item'>
                  <a href="/" className="header_menu-link">Contact Us</a>
                </li>
              </ul>
            </nav>
            <a href="" className="header_button button button-more">Learn More
              <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.01037 4.9934V1.05184L5.64939 1.09142L0.735155 6.01131L0 5.27615L4.91423 0.361923L4.96513 1.00094H1.0066V0L6 0.0113101V4.9934H5.01037Z" fill="white" />
              </svg>
            </a>
          </div>
          <button className={isActive ? 'header_burger-button burger-button visible-mobile is-active' : 'header_burger-button burger-button visible-mobile'} onClick={setActiveOverlay}>
            <span class="burger-button__line"></span>
            <span class="burger-button__line"></span>
            <span class="burger-button__line"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header