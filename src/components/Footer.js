import React from 'react'
import "../styles/Footer.css"
import Logo from "../images/LogoFooter.png"

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-inner">

                <div className="logo-footer-section">
                    <img src={Logo} alt="" />
                </div>

                <div className="social-section">
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                </div>

            </div>

            <div className="copyright-section">
                <p>© Flavorce 2022 | All rights reserved!</p>
            </div>

        </div>
    )
}

export default Footer