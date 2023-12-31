import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="Appstore" />
        </div>
        <div className="midFooter">
            <h1>ECCOMERSE</h1>
            <p>High Quality is our first priority</p>

        </div>
        <div className="rightFooter">
            <h4>Follow us</h4>
            <a href="http://instagram.com/mr____mittu">Instagram</a>
        </div>
    </footer>
  )
}

export default Footer
