import { useState } from 'react'

import iconLogo from '../icons/Logo.svg'

function Footer() {

  return (
    <footer className='footer'>
        <div className="footer_body container">
            <div className="footer_content">
                <div className="footer_menu">
                    <ul className="footer_menu-list">
                        <li className="footer_menu-item">
                            <a href="" className="footer_menu-link">Benefits</a>
                        </li>
                        <li className="footer_menu-item">
                            <a href="" className="footer_menu-link">Specifications</a>
                        </li>
                        <li className="footer_menu-item">
                            <a href="" className="footer_menu-link">How-to</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_about">
                    <div className="footer_logo-container">
                        <img src={iconLogo} alt="" className="footer_logo" />
                    </div>
                    <div className="footer_text">
                        <span className="footer_title">© Area.</span>
                        <span className="footer_title">2025</span>
                    </div>
                    <span className="footer_title">All Rights Reserved</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer