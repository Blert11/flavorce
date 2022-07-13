import React from 'react'
import "../styles/PhoneInstall.css"
import PhoneInstallation from "../images/PhoneInstallation.png"

const PhoneInstall = () => {
    return (
        <div className='install-section'>

            <div className="app-text-div">
                <h1>Install our app!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dicta?</p>
                <a href="">Install now</a>
            </div>

            <div className="app-div">
                <img src={PhoneInstallation} alt="" />
            </div>

        </div>
    )
}

export default PhoneInstall