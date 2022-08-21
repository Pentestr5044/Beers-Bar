import React from 'react';
import './topbar.css';
import buyImage from '../assets/icons/currency-dollar.svg';
import personImage from '../assets/icons/person.svg';
import person2Image from '../assets/icons/person-fill.svg';
import giftImage from '../assets/icons/gift.svg';
import messageImage from '../assets/icons/envelope.svg';
import profImage from '../assets/icons/fingerprint.svg';
import aboutImage from '../assets/icons/tornado.svg';
import createImage from '../assets/icons/snow3.svg';
import adminImage from '../assets/icons/snow2.svg';


export default function Topbar() {
  return (
    <div>
        <span className="top-container">
            <div className="left-bar">
                <button className="topbar-btn-menu-left" title="Buy a Beer"><img className="img-test" id="wallet" src={buyImage} alt="null" altText="buy a beer"/></button>
            </div>
            <div className="title-cont">
              <h2 className="middle-title">Beers' Bar Vulnerable API</h2>
            </div>
            <div className="right-bar">              
                <button className="topbar-btn-menu" title="Login"><img className="img-test" id="wallet" src={personImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Logout"><img className="img-test" id="wallet" src={person2Image} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Gift A Beer"><img className="img-test" id="wallet" src={giftImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Messages"><img className="img-test" id="wallet" src={messageImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Profile"><img className="img-test" id="wallet" src={profImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="About Our Beer"><img className="img-test" id="wallet" src={aboutImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Creator"><img className="img-test" id="wallet" src={createImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Admin"><img className="img-test" id="wallet" src={adminImage} alt="null" altText="buy a beer"/></button>
              </div>
        </span>
    </div>
  )
}
